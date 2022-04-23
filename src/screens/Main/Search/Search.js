import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';
import HeaderMain from '../../../components/HeaderMain';
import HorizontalCategories from '../../../components/horizontalCategories';
import CustomInput from '../../../components/CustomInput';
import PeoplesCard from '../../../components/PeoplesCard';
import TopicCard from '../../../components/TopicCard';
import Post from '../../../components/Post';
import {searchUser, userFollowUnFollow} from '../../../services/api';
import {getApi, postApi} from '../../../services/apiFunction';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const category = [
  {
    title: 'People',
    id: 0,
  },
  {
    title: 'Topics',
    id: 1,
  },
  {
    title: 'Post',
    id: 2,
  },
  {
    title: 'Q/A',
    id: 3,
  },
  {
    title: 'Service',
    id: 4,
  },
  {
    title: 'Product',
    id: 5,
  },
];

const Search = ({navigation}) => {
  const {navigate} = navigation;
  const [searchText, setSearchText] = useState('');
  const [preFabText, setPreFabText] = useState(
    'Currently No Data Available To Show',
  );
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchUserData, setSearchUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const selectCategory = ({id, title}) => {
    const foundItem = selectedCategory.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedCategory.filter(e => e?.id !== id);
      // setSelectedCategory(foundItem);
      console.log('inside if');
    } else {
      const idSave = [{id, title}];
      setSelectedCategory(idSave);
    }
  };
  const handleSearch = val => {
    setSearchText(val);
    handlePress();
  };
  const handlePress = async () => {
    if (searchText == '') {
      Toast.show(
        selectedCategory[0]?.title == 'People'
          ? 'Please Type Name To Search'
          : 'Please Type Anything To Search',
      );
      return;
    }
    if (searchUserData.length > 0) setSearchUserData([]);
    setLoading(!loading);
    if (selectedCategory[0]?.title == 'People') {
      const {status, message, data} = await getApi(
        `${searchUser}?search_key=${searchText}`,
        bearer_token,
      );
      setLoading(false);
      if (searchUserData.length > 0) {
        setSearchUserData([]);
      }
      if (status == 1) {
        if (data && data.length > 0) {
          setSearchUserData(data);
        }
        setPreFabText(message);
      } else if (status == 0) {
        setPreFabText(message);
      }
    } else {
      setLoading(false);
    }
  };
  const createFollowUnFollow = async (item_recieved, index) => {
    const {is_following, user_id} = item_recieved;
    console.log('item_recieved', item_recieved, 'index', index);
    const params = {
      follower_id: user_id,
      type: is_following == 0 ? 'follow' : 'unfollow',
    };
    const {status, message} = await postApi(
      userFollowUnFollow,
      params,
      bearer_token,
    );
    if (status == 1) {
      // 1. Make a shallow copy of the array
      let temp_state = [...searchUserData];

      if (is_following == 0) {
        item_recieved.is_following = 1;

        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = {...temp_state[index]};

        // 3. Update the property you're interested in
        temp_element = item_recieved;

        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        temp_state[index] = temp_element;

        // 5. Set the state to our new copy
        setSearchUserData(temp_state);
      } else {
        item_recieved.is_following = 0;
        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = {...temp_state[index]};

        // 3. Update the property you're interested in
        temp_element = item_recieved;

        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        temp_state[index] = temp_element;

        // 5. Set the state to our new copy
        setSearchUserData(temp_state);
      }
      Toast.show(message, Toast.LONG);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <PeoplesCard
        index={index}
        navigation={navigate}
        user_name={item?.user_name}
        user_image={item?.user_image}
        user_id={item?.user_id}
        is_following={item?.is_following}
        createFollowUnFollow={createFollowUnFollow}
      />
    );
  };
  const ListEmptyComponent = () => {
    return (
      <View
        style={[
          styles.justifyCenter,
          styles.alignCenter,
          {marginTop: HP('25%')},
        ]}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={{
              fontSize: size.small,
              fontWeight: 'bold',
            }}
          />
        ) : (
          <Text style={style.normalText}>{preFabText}</Text>
        )}
      </View>
    );
  };
  useEffect(() => {
    setSelectedCategory([{id: category[0]?.id, title: category[0]?.title}]);
  }, []);
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'SEARCH'}
        navigation={navigation}
      />
      <ScrollView>
        <CustomInput
          placeholder={'Search'}
          iconNameRight={'search'}
          iconType={'FontAwesome5'}
          rightIconShow={true}
          rightIconSize={25}
          rightIconColor={colors.black}
          handlePress={handlePress}
          change={handleSearch}
        />
        <HorizontalCategories
          category={category}
          selectCategory={selectCategory}
          selectedCategory={selectedCategory}
        />
        {selectedCategory[0]?.title == 'People' ? (
          <FlatList
            data={searchUserData}
            renderItem={renderItem}
            keyExtractor={item => item?.user_id}
            ListEmptyComponent={ListEmptyComponent}
          />
        ) : selectedCategory[0]?.title == 'Topics' ? (
          <>
            <TopicCard name={'technology'} navigation={navigation} />
            <TopicCard name={'neet'} navigation={navigation} />
            <TopicCard name={'current affairs'} navigation={navigation} />
            <TopicCard name={'jee main'} navigation={navigation} />
            <TopicCard name={'travel'} navigation={navigation} />
            <TopicCard name={'c a foundation'} navigation={navigation} />
            <TopicCard name={'c s foundation'} navigation={navigation} />
          </>
        ) : selectedCategory[0]?.title == 'Post' ? (
          <>
            <Post
              showPostImage={false}
              showTag={true}
              navigation={navigation}
            />
            <Post
              showPostImage={true}
              showTag={false}
              navigation={navigation}
            />
          </>
        ) : selectedCategory[0]?.title == 'Q/A' ? (
          <>
            <Post
              showPostImage={false}
              showTag={true}
              navigation={navigation}
            />
            <Post
              showPostImage={true}
              showTag={false}
              navigation={navigation}
            />
          </>
        ) : selectedCategory[0]?.title == 'Service' ? (
          <>
            <Post
              showPostImage={false}
              showTag={true}
              navigation={navigation}
            />
            <Post
              showPostImage={true}
              showTag={false}
              navigation={navigation}
            />
          </>
        ) : selectedCategory[0]?.title == 'Product' ? (
          <>
            <Post
              showPostImage={false}
              showTag={true}
              navigation={navigation}
            />
            <Post
              showPostImage={true}
              showTag={false}
              navigation={navigation}
            />
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Search;

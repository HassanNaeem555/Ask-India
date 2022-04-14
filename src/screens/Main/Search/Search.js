import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';
import HeaderMain from '../../../components/HeaderMain';
import HorizontalCategories from '../../../components/horizontalCategories';
import CustomInput from '../../../components/CustomInput';
import PeoplesCard from '../../../components/PeoplesCard';
import TopicCard from '../../../components/TopicCard';
import Post from '../../../components/Post';
import {searchUser} from '../../../utils/api';
import {getApi} from '../../../utils/apiFunction';
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
  const renderItem = ({item}) => {
    return (
      <PeoplesCard
        navigation={navigate}
        user_name={item?.user_name}
        user_image={item?.user_image}
        user_id={item?.user_id}
        is_following={item?.is_following}
      />
    );
  };
  useEffect(() => {
    setSelectedCategory([{id: category[0]?.id, title: category[0]?.title}]);
  }, []);
  console.log('selectedCategory', selectedCategory);
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
        <ScrollView
          horizontal={true}
          style={[
            styles.marginVerticleHalfPercent,
            {marginLeft: WP('2%'), marginRight: WP('2%')},
          ]}>
          <HorizontalCategories
            category={category}
            selectCategory={selectCategory}
            selectedCategory={selectedCategory}
          />
        </ScrollView>
        {selectedCategory[0]?.title == 'People' ? (
          <>
            {searchUserData.length > 0 ? (
              <FlatList
                data={searchUserData}
                renderItem={renderItem}
                keyExtractor={item => item?.user_id}
              />
            ) : (
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
            )}
          </>
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

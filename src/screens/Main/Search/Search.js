import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import HorizontalCategories from '../../../components/horizontalCategories';
import CustomInput from '../../../components/CustomInput';
import TopicCard from '../../../components/TopicCard';
import Post from '../../../components/Post';
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
  const [selectedCategory, setSelectedCategory] = useState([]);
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
  const handlePress = () => {
    console.log('Search By Name');
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
        ) : selectedCategory[0]?.title == 'Topics' ? (
          <>
            <TopicCard name={'technology'} />
            <TopicCard name={'neet'} />
            <TopicCard name={'current affairs'} />
            <TopicCard name={'jee main'} />
            <TopicCard name={'travel'} />
            <TopicCard name={'c a foundation'} />
            <TopicCard name={'c s foundation'} />
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

import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import HorizontalCategories from '../../../components/horizontalCategories';
import SearchBar from '../../../components/SearchBar';
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
  const selectCategory = id => {
    const foundItem = selectedCategory.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedCategory.filter(e => e?.id !== id);
      setSelectedCategory(foundItem);
      console.log('inside if');
    } else {
      const idSave = [{id, title}];
      setSelectedCategory(idSave);
    }
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
        <SearchBar placeholder={'Ask Something'} showSearchIcon={true} />
        <ScrollView
          horizontal={true}
          style={[
            styles.margin2Percent,
            {marginLeft: WP('4%'), marginRight: WP('4%')},
          ]}>
          <HorizontalCategories
            category={category}
            selectCategory={selectCategory}
            selectedCategory={selectedCategory}
          />
        </ScrollView>
        <Post showPostImage={false} showTag={true} navigation={navigation} />
        <Post showPostImage={true} showTag={false} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Search;

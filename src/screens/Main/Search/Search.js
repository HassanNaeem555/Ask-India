import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderMain from '../../../components/HeaderMain';
import SearchBar from '../../../components/SearchBar';
import Post from '../../../components/Post';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const category = [
  {
    title: 'Tech',
    id: 0,
  },
  {
    title: 'Commerce',
    id: 1,
  },
  {
    title: 'Startups',
    id: 2,
  },
  {
    title: 'Lookups',
    id: 3,
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
      const idSave = [{id}];
      setSelectedCategory(idSave);
      console.log('inside else', idSave);
    }
  };
  useEffect(() => {
    setSelectedCategory([{id: category[0]?.id}]);
    SplashScreen.hide();
  }, []);
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'ios-caret-back-outline'}
        showSearch={false}
        showNotifications={false}
        headerText={'Search'}
        navigation={navigation}
      />
      <ScrollView>
        <SearchBar placeholder={'Ask Something'} showSearchIcon={true} />
        <ScrollView
          horizontal={true}
          style={[styles.paddingHorizontal4Percent, styles.margin3Percent]}>
          {category.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                onPress={() => {
                  selectCategory(item?.id);
                }}
                style={
                  selectedCategory.length > 0 &&
                  selectedCategory.filter(e => e?.id === item?.id).length > 0
                    ? [style.categoryButton, style.activeCategoryButton]
                    : [style.categoryButton]
                }>
                <Text
                  style={
                    selectedCategory.length > 0 &&
                    selectedCategory.filter(e => e?.id === item?.id).length > 0
                      ? [style.catgoryTitle, style.activeCatgoryTitle]
                      : [style.catgoryTitle]
                  }>
                  {item?.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Post showPostImage={false} showTag={true} navigation={navigation} />
        <Post showPostImage={true} showTag={false} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Search;

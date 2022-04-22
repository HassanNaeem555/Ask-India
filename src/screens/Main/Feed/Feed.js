import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderMain from '../../../components/HeaderMain';
import HorizontalCategories from '../../../components/horizontalCategories';
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
const FeedStack = ({navigation}) => {
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
      console.log('inside else', idSave);
    }
  };
  const drawerOpen = () => {
    navigation.toggleDrawer();
  };
  useEffect(() => {
    setSelectedCategory([{id: category[0]?.id, title: category[0]?.title}]);
    SplashScreen.hide();
  }, []);
  return (
    <View
      style={[
        styles.mainContainer,
        styles.paddingHorizontal2Percent,
        styles.bgWhite,
      ]}>
      <HeaderMain
        leftIcon={'ios-menu-sharp'}
        showSearch={true}
        showNotifications={true}
        headerText={'HOME'}
        navigation={navigation}
        navigateLeftIcon={drawerOpen}
      />
      <ScrollView>
        <Text
          style={[
            style.mainHeading,
            styles.marginHalfPercent,
            {marginLeft: WP('4%')},
          ]}>
          Welcome, John
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={style.searchBar}
          onPress={() => navigation.navigate('CreatePost')}>
          <Text>Ask Something</Text>
        </TouchableOpacity>
        <HorizontalCategories
          category={category}
          selectCategory={selectCategory}
          selectedCategory={selectedCategory}
        />
        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            styles.margin2Percent,
            styles.paddingHorizontal4Percent,
          ]}>
          <Text style={style.normalText}>Sort By </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.directionRow, styles.justifySpaceBetween]}>
            <Text style={[style.filterText, , {marginRight: WP('1%')}]}>
              Latest
            </Text>
            <Entypo
              name="arrow-with-circle-down"
              size={size.xxlarge}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        <Post showPostImage={false} showTag={true} navigation={navigation} />
        <Post showPostImage={true} showTag={false} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default FeedStack;

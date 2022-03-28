import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SplashScreen from 'react-native-splash-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderMain from '../../../components/HeaderMain';
import HorizontalCategories from '../../../components/horizontalCategories';
import Post from '../../../components/Post';
import CategoryPost from '../../../components/CategoryPost';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

let SLIDER_WIDTH = Dimensions.get('window').width - 0.99;
let ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.99);

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
const data = [
  {
    title: 'Aenean leo',
    body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    imgUrl: 'https://picsum.photos/id/11/200/300',
  },
  {
    title: 'In turpis',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl: 'https://picsum.photos/id/10/200/300',
  },
  {
    title: 'Lorem Ipsum',
    body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
];
const FeedStack = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [orientation, setOrientation] = useState(false);
  const isCarousel = useRef(null);
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
  const CarouselCardItem = ({item, index}) => {
    return <CategoryPost showPostImage={false} navigation={navigation} />;
  };
  useEffect(() => {
    setSelectedCategory([{id: category[0]?.id}]);
    SplashScreen.hide();
  }, []);
  DeviceInfo.isLandscape().then(isLandscape => {
    if (isLandscape) {
      ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
    } else {
      ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.955);
    }
    setOrientation(isLandscape);
    console.log('function run on device Rotation', isLandscape);
  });
  return (
    <SafeAreaView
      style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <StatusBar backgroundColor={'red'} barStyle="light-content" />
      <HeaderMain
        leftIcon={'ios-grid'}
        showSearch={true}
        showNotifications={true}
        headerText={'Welcome, Rajesh'}
        navigation={navigation}
      />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.9}
          style={style.searchBar}
          onPress={() => navigation.navigate('Search')}>
          <Text>Ask Something</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          style={[styles.paddingHorizontal4Percent, styles.margin3Percent]}>
          <HorizontalCategories
            category={category}
            selectCategory={selectCategory}
            selectedCategory={selectedCategory}
          />
        </ScrollView>
        <View
          style={[
            styles.directionRow,
            styles.justifyEnd,
            styles.margin3Percent,
            {marginRight: WP('4%')},
          ]}>
          <Text style={style.normalText}>Sort By: </Text>
          <View
            style={[
              style.filterSelection,
              styles.w_25,
              styles.directionRow,
              styles.justifySpaceBetween,
            ]}>
            <Text style={style.filterText}>Latest</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[style.chevoronBg, styles.alignCenter]}>
              <AntDesign name={'down'} size={13} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        <Post showPostImage={false} showTag={true} navigation={navigation} />
        <Post showPostImage={true} showTag={false} navigation={navigation} />
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedStack;

import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import HeaderMain from '../../../components/HeaderMain';
import Post from '../../../components/Post';
import CustomInput from '../../../components/CustomInput';
import CounsellingCard from '../../../components/CounsellingCard';
import {appImages} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const category = [
  {
    title: 'SERVICES',
    id: 0,
  },
  {
    title: 'PRODUCTS',
    id: 1,
  },
  {
    title: 'COUNSELLING',
    id: 2,
  },
];
const counselling = [
  {
    id: 0,
    image: appImages?.counsellingImageFirst,
    title: 'Mark Smith',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
  },
  {
    id: 1,
    image: appImages?.counsellingImageSecond,
    title: 'Mr. Jayden Miles',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
  },
  {
    id: 2,
    image: appImages?.counsellingImageThird,
    title: 'Mrs. Henry Ethan',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
  },
  {
    id: 3,
    image: appImages?.counsellingImageFourth,
    title: 'Eng. John Burland',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
  },
];
const Discover = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const selectTab = ({id, title}) => {
    const foundItem = selectedCategory.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedCategory.filter(e => e?.id !== id);
    } else {
      const idSave = [{id, title}];
      setSelectedCategory(idSave);
    }
  };
  const drawerOpen = () => {
    navigation.toggleDrawer();
  };
  const handlePress = () => {
    console.log('handlePress');
  };
  useEffect(() => {
    setSelectedCategory([{id: category[0]?.id, title: category[0]?.title}]);
  }, []);
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        leftIcon={'ios-menu-sharp'}
        showSearch={true}
        showNotifications={true}
        headerText={'DISCOVERY'}
        navigation={navigation}
        navigateLeftIcon={drawerOpen}
      />
      <ScrollView>
        <CustomInput
          placeholder={'Search'}
          iconNameRight={'search'}
          iconType={'Ionicons'}
          rightIconShow={true}
          rightIconSize={25}
          rightIconColor={colors.black}
          handlePress={handlePress}
        />
        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            styles.paddingHorizontal4Percent,
            styles.marginVerticleHalfPercent,
          ]}>
          {category.map((item, index) => {
            return (
              <>
                {selectedCategory[0]?.id == item?.id ? (
                  <LinearGradient
                    colors={[colors.primary, colors.secondary]}
                    start={{x: 1, y: 1}}
                    end={{x: 1, y: 0}}
                    style={[
                      styles.marginVerticleHalfPercent,
                      {
                        borderRadius: 25,
                        width: WP('28%'),
                        marginRight: WP('1%'),
                      },
                    ]}
                    key={index}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={[
                        styles.justifyCenter,
                        styles.alignCenter,
                        {padding: 10},
                      ]}
                      onPress={() => {
                        selectTab(item);
                      }}>
                      <Text
                        style={[style.catgoryTitle, style.activeCatgoryTitle]}>
                        {item?.title}
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    key={index}
                    style={[
                      styles.marginVerticleHalfPercent,
                      styles.justifyCenter,
                      styles.alignCenter,
                      style.categoryButton,
                      {
                        padding: 10,
                        borderRadius: 25,
                        width: WP('28%'),
                        marginRight: WP('1%'),
                      },
                    ]}
                    onPress={() => {
                      selectTab(item);
                    }}>
                    <Text style={style.catgoryTitle}>{item?.title}</Text>
                  </TouchableOpacity>
                )}
              </>
            );
          })}
        </View>
        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            styles.margin2Percent,
            styles.paddingHorizontal2Percent,
            {marginLeft: WP('2%'), marginRight: WP('3%')},
          ]}>
          <Text style={style.normalText}>Sort By: </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.directionRow, styles.justifySpaceBetween]}>
            <Text style={[style.normalText, , {marginRight: WP('1%')}]}>
              Latest
            </Text>
            <Entypo
              name="arrow-with-circle-down"
              size={size.xxlarge}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        {selectedCategory[0]?.title === 'SERVICES' ? (
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
        ) : selectedCategory[0]?.title === 'PRODUCTS' ? (
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
        ) : selectedCategory[0]?.title === 'COUNSELLING' ? (
          <>
            {counselling.map((item, index) => {
              return (
                <CounsellingCard
                  image={item?.image}
                  heading={item?.title}
                  description={item?.description}
                  id={item?.id}
                  index={index}
                  navigation={navigation}
                />
              );
            })}
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Discover;

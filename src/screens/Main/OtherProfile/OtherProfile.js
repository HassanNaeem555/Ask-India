import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../components/Button';
import HeaderMain from '../../../components/HeaderMain';
import Image from '../../../components/Img';
import Post from '../../../components/Post';
import {appImages} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';
const category = [
  {
    title: 'POST',
    id: 0,
  },
  {
    title: 'Q & A',
    id: 1,
  },
  {
    title: 'SERVICES',
    id: 2,
  },
  {
    title: 'PRODUCTS',
    id: 3,
  },
];

const OtherProfile = ({navigation}) => {
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
  const handleNavigate = () => {
    // navigation.navigate('EditProfile');
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
        headerText={'OTHER PROFILE'}
        navigation={navigation}
      />
      <ScrollView>
        <Card
          containerStyle={{
            marginHorizontal: 0,
            overflow: 'hidden',
            borderRadius: 15,
            borderWidth: 0,
            marginVertical: 0,
          }}>
          <View style={[styles.justifyCenter, styles.alignCenter]}>
            <ImageBackground
              source={appImages?.profileImageBorder}
              resizeMode={'contain'}
              style={[
                styles.alignCenter,
                {
                  width: WP('100%'),
                  height: HP('20%'),
                  position: 'relative',
                  overflow: 'hidden',
                },
              ]}>
              <Image
                local={true}
                resizeMode={'contain'}
                style={style.profileImage}
                src={appImages?.profileImageRound}
              />
            </ImageBackground>
            <Text
              numberOfLines={1}
              style={[style.heading, styles.fontBold, styles.margin1Percent]}>
              John Smith
            </Text>
            <Text
              numberOfLines={1}
              style={[
                style.email,
                styles.fontBold,
                styles.colorGray,
                styles.marginVerticleHalfPercent,
              ]}>
              john@gmail.com
            </Text>
          </View>
          <Text
            numberOfLines={2}
            style={[style.subHeading, styles.marginVerticleHalfPercent]}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
          </Text>
          <View
            style={[
              styles.directionRow,
              styles.justifyCenter,
              styles.alignCenter,
              styles.margin1Percent,
            ]}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.alignCenter,
                styles.paddingHorizontal4Percent,
                style.borderRight,
              ]}>
              <Text
                style={[
                  style.normalText,
                  styles.fontBold,
                  styles.colorPrimary,
                ]}>
                1,201
              </Text>
              <Text
                style={[
                  style.smallText,
                  styles.fontBold,
                  styles.colorGray,
                  styles.marginVerticleHalfPercent,
                ]}>
                Post
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Followers');
              }}
              activeOpacity={0.9}
              style={[
                styles.alignCenter,
                styles.paddingHorizontal4Percent,
                style.borderRight,
              ]}>
              <Text
                style={[
                  style.normalText,
                  styles.fontBold,
                  styles.colorPrimary,
                ]}>
                1,201
              </Text>
              <Text
                style={[
                  style.smallText,
                  styles.fontBold,
                  styles.colorGray,
                  styles.marginVerticleHalfPercent,
                ]}>
                Followers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Following');
              }}
              activeOpacity={0.9}
              style={[styles.alignCenter, styles.paddingHorizontal4Percent]}>
              <Text
                style={[
                  style.normalText,
                  styles.fontBold,
                  styles.colorPrimary,
                ]}>
                1,201
              </Text>
              <Text
                style={[
                  style.smallText,
                  styles.fontBold,
                  styles.colorGray,
                  styles.marginVerticleHalfPercent,
                ]}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.directionRow,
              styles.justifyCenter,
              styles.alignCenter,
              styles.marginVerticle2Percent,
            ]}>
            <Button
              buttonText={'FOLLOW'}
              handlePress={handleNavigate}
              width={WP('90%')}
            />
          </View>
        </Card>
        <ScrollView horizontal={true}>
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
        </ScrollView>
        {selectedCategory[0]?.title === 'POST' ? (
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
        ) : selectedCategory[0]?.title === 'Q & A' ? (
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
        ) : selectedCategory[0]?.title === 'SERVICES' ? (
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
        ) : null}
      </ScrollView>
    </View>
  );
};

export default OtherProfile;

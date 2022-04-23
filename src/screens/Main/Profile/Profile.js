import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../components/Button';
import HeaderMain from '../../../components/HeaderMain';
import Image from '../../../components/Img';
import Post from '../../../components/Post';
import { appImages } from '../../../assets';
import { image_url } from '../../../services/url';
import { user_profile } from '../../../services/api';
import { getApi } from '../../../services/apiFunction';
import { WP, HP, colors } from '../../../utilities';
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
const Profile = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const user_profile_data = useSelector(state => state.authReducer.user);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const selectTab = ({ id, title }) => {
    const foundItem = selectedCategory.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedCategory.filter(e => e?.id !== id);
    } else {
      const idSave = [{ id, title }];
      setSelectedCategory(idSave);
    }
  };
  const getUserProfile = async () => {
    const { data, message, status } = await getApi(
      `${user_profile}?other_id=${user_profile_data?.user_id}`,
      bearer_token,
    );
    if (status == 1) {
      console.log('data', data);
      setUserProfile(data);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const drawerOpen = () => {
    navigation.toggleDrawer();
  };
  const handleNavigate = () => {
    navigation.navigate('EditProfile');
  };
  useEffect(() => {
    setSelectedCategory([{ id: category[0]?.id, title: category[0]?.title }]);
    getUserProfile();
  }, []);
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        leftIcon={'ios-menu-sharp'}
        showSearch={false}
        showNotifications={true}
        headerText={'PROFILE'}
        navigation={navigation}
        navigateLeftIcon={drawerOpen}
      />
      <ScrollView>
        <Card
          containerStyle={[
            styles.marginHorizontal1Percent,
            {
              overflow: 'hidden',
              borderRadius: 15,
              borderWidth: 0,
              marginVertical: 0,
            },
          ]}>
          <View style={[styles.justifyCenter, styles.alignCenter]}>
            {/* <ImageBackground
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
            </ImageBackground> */}
            <Image
              local={true}
              resizeMode={'cover'}
              style={[style.profileImage]}
              src={
                user_profile_data?.user_image !== null
                  ? { uri: image_url + user_profile_data?.user_image }
                  : appImages?.profileImageRound
              }
            />
            <Text
              numberOfLines={1}
              style={[style.heading, styles.fontBold, styles.margin1Percent]}>
              {user_profile_data
                && user_profile_data?.user_name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                style.email,
                styles.fontBold,
                styles.colorGray,
                styles.marginVerticleHalfPercent,
              ]}>
              {user_profile_data
                && user_profile_data?.user_email}
            </Text>
          </View>
          {/* <Text
            numberOfLines={2}
            style={[style.subHeading, styles.marginVerticleHalfPercent]}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
          </Text> */}
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
              {userProfile ? (
                <Text
                  style={[
                    style.normalText,
                    styles.fontBold,
                    styles.colorPrimary,
                  ]}>
                  {userProfile?.total_post}
                </Text>
              ) : (
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item
                    flexDirection="row"
                    alignItems="center"
                    marginVertical={HP('1.5%')}>
                    <SkeletonPlaceholder.Item
                      width={WP('10%')}
                      height={30}
                      borderRadius={10}
                    />
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
              )}
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
                userProfile?.total_follower > 0 &&
                  navigation.navigate('Followers', {
                    user_id: user_profile_data ? user_profile_data?.user_id : 0,
                  });
              }}
              activeOpacity={0.9}
              style={[
                styles.alignCenter,
                styles.paddingHorizontal4Percent,
                style.borderRight,
              ]}>
              {userProfile ? (
                <Text
                  style={[
                    style.normalText,
                    styles.fontBold,
                    styles.colorPrimary,
                  ]}>
                  {userProfile?.total_follower}
                </Text>
              ) : (
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item
                    flexDirection="row"
                    alignItems="center"
                    marginVertical={HP('1.5%')}>
                    <SkeletonPlaceholder.Item
                      width={WP('10%')}
                      height={30}
                      borderRadius={10}
                    />
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
              )}
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
                userProfile?.total_following > 0 &&
                  navigation.navigate('Following', {
                    user_id: user_profile_data ? user_profile_data?.user_id : 0,
                  });
              }}
              activeOpacity={0.9}
              style={[styles.alignCenter, styles.paddingHorizontal4Percent]}>
              {userProfile ? (
                <Text
                  style={[
                    style.normalText,
                    styles.fontBold,
                    styles.colorPrimary,
                  ]}>
                  {userProfile?.total_following}
                </Text>
              ) : (
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item
                    flexDirection="row"
                    alignItems="center"
                    marginVertical={HP('1.5%')}>
                    <SkeletonPlaceholder.Item
                      width={WP('10%')}
                      height={30}
                      borderRadius={10}
                    />
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
              )}
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
              buttonText={'EDIT PROFILE'}
              handlePress={handleNavigate}
              width={WP('90%')}
            />
          </View>
        </Card>
        <ScrollView
          horizontal={true}
          style={[
            styles.margin2Percent,
            { marginLeft: WP('2%'), marginRight: WP('3%') },
          ]}>
          {category.map((item, index) => {
            return (
              <>
                {selectedCategory[0]?.id == item?.id ? (
                  <LinearGradient
                    colors={[colors.primary, colors.secondary]}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={[
                      styles.justifyCenter,
                      styles.alignCenter,
                      {
                        borderRadius: 25,
                        width: WP('28%'),
                        marginRight: WP('1%'),
                      },
                    ]}
                    key={index}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={[styles.justifyCenter, styles.alignCenter]}
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
                    key={index + 1}
                    style={[
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

export default Profile;

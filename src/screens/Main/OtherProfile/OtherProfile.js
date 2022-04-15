import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Card} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../components/Button';
import HeaderMain from '../../../components/HeaderMain';
import Image from '../../../components/Img';
import Post from '../../../components/Post';
import {user_profile} from '../../../utils/api';
import {image_url} from '../../../utils/url';
import {getApi, postApi} from '../../../utils/apiFunction';
import {userFollowUnFollow} from '../../../utils/api';
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

const OtherProfile = ({navigation, route}) => {
  const {id} = route.params;
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const selectTab = ({id, title}) => {
    const foundItem = selectedCategory.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedCategory.filter(e => e?.id !== id);
    } else {
      const idSave = [{id, title}];
      setSelectedCategory(idSave);
    }
  };
  const handleNavigate = async () => {
    if (userProfile == null) return;
    const {is_following} = userProfile;
    const params = {
      follower_id: id,
      type: is_following == 0 ? 'follow' : 'unfollow',
    };
    const {status, message} = await postApi(
      userFollowUnFollow,
      params,
      bearer_token,
    );
    if (status == 1) {
      // 1. Make a shallow copy of the array
      let temp_state = {...userProfile};

      if (is_following == 0) {
        temp_state.is_following = 1;
        temp_state.total_follower = temp_state.total_follower + 1;
        setUserProfile(temp_state);
      } else {
        temp_state.is_following = 0;
        temp_state.total_follower = temp_state.total_follower - 1;
        setUserProfile(temp_state);
      }
      Toast.show(message, Toast.LONG);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const getUserProfile = async () => {
    const {data, message, status} = await getApi(
      `${user_profile}?other_id=${id}`,
      bearer_token,
    );
    if (status == 1) {
      console.log('data', data);
      setUserProfile(data);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  useEffect(() => {
    setSelectedCategory([{id: category[0]?.id, title: category[0]?.title}]);
    if (id !== 0) {
      getUserProfile();
    }
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
            <Image
              local={true}
              resizeMode={'cover'}
              style={style.profileImage}
              src={{uri: image_url + userProfile?.user_image}}
            />
            {userProfile ? (
              <Text
                numberOfLines={1}
                style={[style.heading, styles.fontBold, styles.margin1Percent]}>
                {userProfile?.user_name ? userProfile?.user_name : ''}
              </Text>
            ) : (
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  flexDirection="row"
                  alignItems="center"
                  marginVertical={HP('1.5%')}>
                  <SkeletonPlaceholder.Item
                    width={WP('50%')}
                    height={20}
                    borderRadius={10}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder>
            )}
            {userProfile?.user_email && (
              <Text
                numberOfLines={1}
                style={[
                  style.email,
                  styles.fontBold,
                  styles.colorGray,
                  styles.marginVerticleHalfPercent,
                ]}>
                {userProfile?.user_email}
              </Text>
            )}
          </View>
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
              // onPress={() => {
              //   userProfile?.total_follower > 0 &&
              //     navigation.navigate('Followers');
              // }}
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
              // onPress={() => {
              //   userProfile?.total_following > 0 &&
              //     navigation.navigate('Following');
              // }}
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
              buttonText={
                userProfile?.is_following == 0 ? 'FOLLOW' : 'UNFOLLOW'
              }
              handlePress={handleNavigate}
              width={WP('90%')}
            />
          </View>
        </Card>
        <ScrollView
          horizontal={true}
          style={[
            styles.margin2Percent,
            {marginLeft: WP('2%'), marginRight: WP('3%')},
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
                    key={index}
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

export default OtherProfile;

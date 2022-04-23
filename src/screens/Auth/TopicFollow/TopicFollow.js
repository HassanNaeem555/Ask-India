import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import Image from '../../../components/Img';
import { appLogos, appImages } from '../../../assets';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import { enrolledTopic, updateProfile } from '../../../services/api';
import { saveUserProfile, validateUserLogin } from '../../../store/actions/authAction';
import { getApi, postApiFetch } from '../../../services/apiFunction';
import { colors, WP, HP, size } from '../../../utilities';
import styles from '../style';
import style from './styles';

const TopicFollow = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { preference_id, user_preference } = route.params;
  const [topicList, setTopicList] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState([]);
  const [sendList, setSendList] = useState([]);
  const [loading, setLoading] = useState(false);
  const social_user_profile_data = useSelector(
    state => state.authReducer.user_social,
  );
  let user_stored = null;
  if (social_user_profile_data == null) {
    user_stored = useSelector(state => state.authReducer.temporaryUserId);
  } else {
    user_stored = useSelector(state => state.authReducer.user);
  }
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const handlePress = item => {
    const { tag_name, tag_id } = item;
    const foundItem = selectedProgram.filter(e => e?.tag_id === tag_id);
    const foundItemSend = sendList.filter(e => e === tag_id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedProgram.filter(e => e?.tag_id !== tag_id);
      setSelectedProgram(foundItem);
      setSendList(foundItemSend);
      console.log('inside if');
    } else {
      const idSave = [{ tag_id, tag_name }];
      const idSend = [tag_id];
      const newUpdatedArray = selectedProgram?.concat(idSave);
      const newUpdatedArraySend = sendList?.concat(idSend);
      setSelectedProgram(newUpdatedArray);
      setSendList(newUpdatedArraySend);
      console.log('inside else', idSave);
    }
  };
  const getTopicFollow = async () => {
    const { data, message, status } = await getApi(
      `${enrolledTopic}?preference_id=${preference_id}`,
      bearer_token,
    );
    if (status == 1) {
      setTopicList(data);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const renderItem = item => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.directionRow,
          styles.justifySpaceBetween,
          styles.margin1Percent,
          styles.padding1Percent,
          styles.paddingHorizontal4Percent,
          style.customSelectionBox,
          selectedProgram.length > 0 &&
            selectedProgram.filter(e => e?.tag_id === item?.item?.tag_id)
              .length > 0
            ? {
              borderColor: colors.primary,
            }
            : { borderColor: colors.lightGray },
        ]}
        onPress={() => {
          handlePress(item?.item);
        }}>
        <Text style={[style.selectionBoxText, styles.marginVerticle1HalfPercent]}>{item?.item?.tag_name}</Text>
        {/* <View
          style={
            selectedProgram.length > 0 &&
            selectedProgram.filter(e => e?.grade_id === item?.item.grade_id)
              .length > 0
              ? [style.customSelectionCircle, style.customSelectionCircleActive]
              : style.customSelectionCircle
          }></View> */}
        <Image
          local={true}
          resizeMode={'contain'}
          style={style.selectedImage}
          src={
            selectedProgram.length > 0 &&
              selectedProgram.filter(e => e?.tag_id === item?.item?.tag_id)
                .length > 0
              ? appImages?.selectedTopic
              : appImages?.unselectTopic
          }
        />
      </TouchableOpacity>
    );
  };
  const updateProfileUsers = async () => {
    if (sendList.length == 0) {
      Toast.show('Please Select Topic', Toast.LONG);
      return;
    }
    setLoading(!loading);
    const params = new FormData();
    params.append('user_id', user_stored !== null ? user_stored?.user_id : 0);
    // params.append('user_preference', user_preference);
    params.append('user_tags', JSON.stringify(sendList));
    const { data, message, status } = await postApiFetch(
      updateProfile,
      params,
      bearer_token,
    );
    setLoading(false);
    if (status == 1) {
      console.log('data', data);
      dispatch(saveUserProfile(data));
      Toast.show(message, Toast.LONG);
      if (social_user_profile_data !== null) {
        dispatch(validateUserLogin());
      } else {
        navigation.navigate('Login');
      }
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const listHeaderComponent = () => {
    return (
      <>
        <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
        {selectedProgram.length > 0 && (
          <Card
            containerStyle={[
              styles.paddingHorizontal1Percent,
              {
                overflow: 'hidden',
                marginHorizontal: 0,
                borderRadius: 10,
                marginBottom: HP('2%'),
              },
            ]}>
            <View style={[styles.directionRow, { flexWrap: 'wrap' }]}>
              {selectedProgram.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.9}
                    style={styles.directionRow}
                    onPress={() => {
                      handlePress(item);
                    }}>
                    <Text
                      style={[
                        styles.paddingHorizontal2Percent,
                        styles.paddingHalfPercent,
                        style.selectedTopic,
                      ]}>
                      {item?.tag_name}
                    </Text>
                    <Entypo
                      name={'circle-with-cross'}
                      size={size.large}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </Card>
        )
        }
      </>
    )
  }
  const ListEmptyComponent = () => {
    return (
      <>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginVertical={HP('0.8%')}>
            <SkeletonPlaceholder.Item
              width={WP('90%')}
              height={50}
              borderRadius={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginVertical={HP('0.8%')}>
            <SkeletonPlaceholder.Item
              width={WP('90%')}
              height={50}
              borderRadius={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginVertical={HP('0.8%')}>
            <SkeletonPlaceholder.Item
              width={WP('90%')}
              height={50}
              borderRadius={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginVertical={HP('0.8%')}>
            <SkeletonPlaceholder.Item
              width={WP('90%')}
              height={50}
              borderRadius={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </>
    )
  }
  const ListFooterComponent = () => {
    return (
      <View
        style={[
          styles.directionRow,
          styles.alignCenter,
          styles.marginVerticle2Percent,
        ]}>
        {loading ? (
          <LoadingButton width={WP('90%')} />
        ) : (
          <Button
            buttonText={'DONE'}
            handlePress={updateProfileUsers}
            width={WP('90%')}
          />
        )}
      </View>
    )
  }
  useEffect(() => {
    getTopicFollow();
  }, []);
  return (
    <View style={[styles.mainContainer, { padding: 16 }]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'FOLLOW TOPICS'}
        navigation={navigation}
      />
      <FlatList
        data={topicList}
        ListHeaderComponent={listHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooterComponent}
        renderItem={renderItem}
        keyExtractor={item => item.grade_id}
        style={[styles.alignSelfStretch, { paddingBottom: 50 }]}
      />
    </View>
  );
};

export default TopicFollow;

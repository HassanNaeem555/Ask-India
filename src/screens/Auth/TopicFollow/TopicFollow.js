import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useSelector, useDispatch} from 'react-redux';
import {Card} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import {appLogos} from '../../../assets';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {enrolledTopic, updateProfile} from '../../../utils/api';
import {saveUserProfile} from '../../../store/actions/authAction';
import {getApi, postApi} from '../../../utils/apiFunction';
import {colors, WP, HP, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const data = [
  {
    title: '11th / 12th',
    id: 0,
  },
  {
    title: 'Bachelors of Arts / MA',
    id: 1,
  },
  {
    title: 'Bachelors of Commerce / Mcom',
    id: 2,
  },
  {
    title: 'Bachelors of Science / Bsc / BTech',
    id: 3,
  },
  {
    title: 'Bachelors of Agriculture / Master',
    id: 4,
  },
  {
    title: 'UPSC',
    id: 5,
  },
  {
    title: 'SSC',
    id: 6,
  },
  {
    title: 'Banking',
    id: 7,
  },
  {
    title: 'State PSC',
    id: 8,
  },
  {
    title: 'Others',
    id: 9,
  },
];
const TopicFollow = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {board_id, profilePhoto} = route.params;
  const [topicList, setTopicList] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState([]);
  const [sendList, setSendList] = useState([]);
  const [loading, setLoading] = useState(false);
  const {user_id} = useSelector(state => state.authReducer.temporaryUserId);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const handlePress = item => {
    const {grade_name, grade_id} = item;
    const foundItem = selectedProgram.filter(e => e?.grade_id === grade_id);
    const foundItemSend = sendList.filter(e => e === grade_id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedProgram.filter(e => e?.grade_id !== grade_id);
      setSelectedProgram(foundItem);
      setSendList(foundItemSend);
      console.log('inside if');
    } else {
      const idSave = [{grade_id, grade_name}];
      const idSend = [grade_id];
      const newUpdatedArray = selectedProgram?.concat(idSave);
      const newUpdatedArraySend = sendList?.concat(idSend);
      setSelectedProgram(newUpdatedArray);
      setSendList(newUpdatedArraySend);
      console.log('inside else', idSave);
    }
  };
  const getTopicFollow = async () => {
    const {data, message, status} = await getApi(
      `${enrolledTopic}?board_id=${board_id}`,
      {
        headers: {
          Authorization: `Bearer ${bearer_token}`,
        },
      },
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
          styles.padding2Percent,
          styles.paddingHorizontal4Percent,
          style.customSelectionBox,
          selectedProgram.length > 0 &&
          selectedProgram.filter(e => e?.grade_id === item?.item?.grade_id)
            .length > 0
            ? {
                borderColor: colors.primary,
              }
            : {borderColor: colors.lightGray},
        ]}
        onPress={() => {
          handlePress(item?.item);
        }}>
        <Text style={style.selectionBoxText}>{item?.item?.grade_name}</Text>
        <View
          style={
            selectedProgram.length > 0 &&
            selectedProgram.filter(e => e?.grade_id === item?.item.grade_id)
              .length > 0
              ? [style.customSelectionCircle, style.customSelectionCircleActive]
              : style.customSelectionCircle
          }></View>
      </TouchableOpacity>
    );
  };
  const updateProfileUsers = async () => {
    if (sendList.length == 0) {
      Toast.show('Please Select Topic', Toast.LONG);
      return;
    }
    setLoading(!loading);
    // let send_user_data = new FormData();
    // send_user_data.append('user_tags', sendList);
    // send_user_data.append('user_id', user_id);
    // send_user_data.append('user_image', {
    //   uri: profilePhoto[0].uri.replace('file://', ''),
    //   type: profilePhoto[0].type,
    //   name: `Profile${Date.now()}.${profilePhoto[0].type.slice(
    //     profilePhoto[0].type.lastIndexOf('/') + 1,
    //   )}`,
    // });
    // console.log('send_user_data', send_user_data);
    // const {data, status, message} = await postApi(
    //   updateProfile,
    //   send_user_data,
    //   {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       Authorization: `Bearer ${bearer_token}`,
    //     },
    //   },
    // );
    setLoading(false);
    Toast.show('Updated Successfully', Toast.LONG);
    navigation.navigate('Login');
    // if (status == 1) {
    //   dispatch(saveUserProfile(data));
    // } else if (status == 0) {
    //   Toast.show(message, Toast.LONG);
    // }
  };
  useEffect(() => {
    getTopicFollow();
  }, []);
  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      {/* <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}> */}
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'FOLLOW TOPICS'}
        navigation={navigation}
      />
      <View style={styles.alignSelfStretch}>
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
            <View style={[styles.directionRow, {flexWrap: 'wrap'}]}>
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
                      {item?.grade_name}
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
        )}
        <FlatList
          data={topicList}
          renderItem={renderItem}
          keyExtractor={item => item.grade_id}
        />
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
      </View>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default TopicFollow;

import React, {createRef, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {appLogos} from '../../../assets';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/TextWithActionSheet';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {saveUserProfile} from '../../../store/actions/authAction';
import {updateProfile, city, state} from '../../../services/api';
import {getApi, postApiFetch} from '../../../services/apiFunction';
import {WP, HP} from '../../../utilities';
import styles from '../style';
import ActionSheet from 'react-native-actions-sheet';

const PlaceLocation = ({navigation, route}) => {
  const dispatch = useDispatch();
  const social_user_profile_data = useSelector(
    state => state.authReducer.user_social,
  );
  const {user_name, profilePhoto} = route.params;
  const [user_state, setUserState] = useState('');
  const [user_city, setUserCity] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  let user_stored = null;
  if (social_user_profile_data === null) {
    user_stored = useSelector(state => state.authReducer.temporaryUserId);
  } else {
    user_stored = useSelector(state => state.authReducer.user);
  }
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  console.log('place location bearer_token', bearer_token);
  console.log(
    'place location social_user_profile_data',
    social_user_profile_data,
  );
  console.log('place location user_stored', user_stored);
  const onChangeState = val => {
    setUserState(val);
  };
  const onChangeCity = val => {
    setUserCity(val);
  };
  const handlePress = async () => {
    if (user_state == '') {
      Toast.show('Please selecct State Name', Toast.LONG);
      return;
    }
    if (user_city == '') {
      Toast.show('Please selecct City Name', Toast.LONG);
      return;
    }
    setLoading(!loading);
    console.log('social_user_profile_data', social_user_profile_data);
    const params = new FormData();
    if (social_user_profile_data !== null) {
      if (social_user_profile_data?.email) {
        params.append('user_email', social_user_profile_data?.email);
      } else if (social_user_profile_data?.phoneNumber) {
        params.append('user_email', social_user_profile_data?.phoneNumber);
      }
    }
    params.append('user_name', user_name);
    params.append('user_state', user_state);
    params.append('user_city', user_city);
    params.append('user_id', user_stored !== null ? user_stored?.user_id : 0);
    if (profilePhoto && profilePhoto.length > 0) {
      params.append('user_image', {
        uri: profilePhoto[0].uri,
        type: profilePhoto[0].type,
        name: `Profile${Date.now()}.${profilePhoto[0].type.slice(
          profilePhoto[0].type.lastIndexOf('/') + 1,
        )}`,
      });
    }
    const {data, status, message} = await postApiFetch(
      updateProfile,
      params,
      bearer_token,
    );
    setLoading(false);
    if (status == 1) {
      console.log('data', data);
      dispatch(saveUserProfile(data));
      // Toast.show(message, Toast.LONG);
      navigation.navigate('EnrolledProgram');
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const actionSheetStateRef = createRef();
  const actionSheetCitiesRef = createRef();

  const getState = async () => {
    setLoading(!loading);
    const {data, status, message} = await getApi(state, bearer_token);
    if (status == 1) {
      setStates(data);
      setLoading(false);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };

  const getCities = async state_id => {
    setLoading(!loading);
    const {data, status, message} = await getApi(
      `${city}?state_id=${state_id}`,
      bearer_token,
    );
    if (status == 1) {
      setCities(data);
      setLoading(false);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };

  useEffect(() => {
    getState();
  }, []);

  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <ActionSheet
          ref={actionSheetStateRef}
          containerStyle={{backgroundColor: 'transparent'}}>
          <View style={{padding: 10, paddingBottom: 20}}>
            <ActionSheetCommponent
              title="Select a state"
              dataset={states}
              onPress={async item => {
                actionSheetStateRef.current.hide();
                console.log(item, 'iotem');
                setUserState(item.state_name);
                await getCities(item.state_id);
              }}
            />
            <TouchableOpacity
              onPress={() => actionSheetStateRef.current.hide()}
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                paddingVertical: 12,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'rgb(0,88,200)',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
        <ActionSheet
          ref={actionSheetCitiesRef}
          containerStyle={{backgroundColor: 'transparent'}}>
          <View style={{padding: 10, paddingBottom: 20}}>
            <ActionSheetCommponent
              title="Select a state"
              dataset={cities}
              onPress={async item => {
                actionSheetCitiesRef.current.hide();
                console.log(item, 'iotem');
                setUserCity(item.city_name);
              }}
            />
            <TouchableOpacity
              onPress={() => actionSheetCitiesRef.current.hide()}
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                paddingVertical: 12,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'rgb(0,88,200)',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>

        <HeaderMain
          navigateLeftIcon={navigation.pop}
          leftIcon={'chevron-back'}
          showSearch={false}
          showNotifications={false}
          headerText={'CREATE PROFILE'}
          navigation={navigation}
        />
        <View style={[styles.alignCenter, styles.alignSelfStretch]}>
          <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => actionSheetStateRef.current.show()}
            style={{width: '100%'}}>
            <CustomInput
              placeholder={'Enter State Name'}
              iconName={'map'}
              value={user_state}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={loading}
            activeOpacity={0.8}
            onPress={() => actionSheetCitiesRef.current.show()}
            style={{width: '100%'}}>
            <CustomInput
              placeholder={'Enter City Name'}
              iconName={'map'}
              value={user_city}
            />
          </TouchableOpacity>
          <View style={[styles.alignCenter, styles.marginVerticle1Percent]}>
            {loading ? (
              <LoadingButton width={WP('90%')} />
            ) : (
              <Button
                buttonText={'CONTINUE'}
                handlePress={handlePress}
                width={WP('90%')}
              />
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const ActionSheetCommponent = ({
  title = '',
  dataset = [],
  onPress = () => {},
}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(241,241,241,0.9)',
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden',
      }}>
      <View
        style={{
          borderBottomWidth: 1.5,
          borderBottomColor: '#ccc',
          paddingVertical: 10,
        }}>
        <Text
          style={{
            // color: Colors.primary,
            color: 'rgb(0,88,200)',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </View>
      <ScrollView style={{maxHeight: 200}} showsVerticalScrollIndicator={false}>
        {dataset.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(item)}
              style={{
                paddingVertical: 12,
                alignItems: 'center',
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
              }}>
              <Text style={{color: '#000', fontSize: 16}} numberOfLines={1}>
                {item?.state_name?.length ? item?.state_name : item?.city_name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/* <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSearch(item.value);
                      actionSheetRef.current.hide();
                    }}>
                    <Text
                      style={{
                        fontFamily: Fonts.regular,
                        fontSize: 16,
                        color: Colors.Black,
                        marginLeft: 10,
                      }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity> */}
    </View>
  );
};

export default PlaceLocation;

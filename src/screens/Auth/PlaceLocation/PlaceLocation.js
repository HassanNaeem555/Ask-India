import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {appLogos} from '../../../assets';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {saveUserProfile} from '../../../store/actions/authAction';
import {updateProfile} from '../../../utils/api';
import {postApiFetch} from '../../../utils/apiFunction';
import {WP, HP} from '../../../utilities';
import styles from '../style';

const PlaceLocation = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user_name, profilePhoto} = route.params;
  const [user_state, setUserState] = useState('');
  const [user_city, setUserCity] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const {user_id} = useSelector(state => state.authReducer.temporaryUserId);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const onChangeState = val => {
    setUserState(val);
  };
  const onChangeCity = val => {
    setUserCity(val);
  };
  const handlePress = async () => {
    if (user_state == '') {
      Toast.show('Please enter State Name', Toast.LONG);
      return;
    }
    if (user_city == '') {
      Toast.show('Please enter City Name', Toast.LONG);
      return;
    }
    setLoading(!loading);
    const params = new FormData();
    params.append('user_name', user_name);
    params.append('user_state', user_state);
    params.append('user_city', user_city);
    params.append('user_id', user_id);
    if (profilePhoto && profilePhoto.length > 0) {
      params.append('user_image', {
        uri: profilePhoto[0].uri,
        type: profilePhoto[0].type,
        name: `Profile${Date.now()}.${profilePhoto[0].type.slice(
          profilePhoto[0].type.lastIndexOf('/') + 1,
        )}`,
      });
    }
    const {data, message, status} = await postApiFetch(
      updateProfile,
      params,
      bearer_token,
    );
    if (status == 1) {
      console.log('data', data);
      dispatch(saveUserProfile(data));
      Toast.show(message, Toast.LONG);
      navigation.navigate('EnrolledProgram');
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
    setLoading(false);
  };
  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
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
          <CustomInput
            placeholder={'Enter State Name'}
            iconName={'map'}
            iconType={'fontisto'}
            leftIconShow={true}
            error_message={errorMsg}
            change={onChangeState}
          />
          <CustomInput
            placeholder={'Enter City Name'}
            iconName={'map'}
            iconType={'fontisto'}
            leftIconShow={true}
            error_message={errorMsg}
            change={onChangeCity}
          />
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

export default PlaceLocation;

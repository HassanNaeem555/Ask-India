import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-simple-toast';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import HeaderMain from '../../../components/HeaderMain';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import {
  saveUserProfile,
  saveBearerToken,
} from '../../../store/actions/authAction';
import {resendVerificationCode, verificationCode} from '../../../utils/api';
import {getApi, postApi} from '../../../utils/apiFunction';
import Logo from '../../../components/logo';
import styles from '../style';
import style from './styles';

const CELL_COUNT = 6;

const OTP = ({navigation, route}) => {
  const {from} = route.params;
  let dispatch = useDispatch();
  let deviceId = DeviceInfo.getDeviceId();
  const {user_id} = useSelector(state => state.authReducer.temporaryUserId);
  const [value, setValue] = useState('');
  const [key, setKey] = useState(0);
  const [enableMask, setEnableMask] = useState(true);
  const [resendOtpActive, setResendOtpActive] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = enableMask ? '•' : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[style.cell, isFocused && style.focusCell]}
        // onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };
  const resendOtp = async () => {
    const {message, status} = await getApi(
      `${resendVerificationCode}?user_id=${user_id}`,
    );
    if (status == 1) {
      Toast.show(message, Toast.LONG);
      setKey(prevKey => prevKey + 1);
      setValue('');
      setResendOtpActive(false);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const whereToNavigate = async () => {
    let send_data = {
      user_id,
      user_verified_code: value,
      user_device_type: Platform.OS,
      user_device_token: deviceId,
      type: from,
    };
    console.log('send_data', send_data);
    if (from == 'signup') {
      const {bearer_token, data, message, status} = await postApi(
        verificationCode,
        send_data,
      );
      // console.log('result', result);
      if (status == 1) {
        dispatch(saveUserProfile(data));
        dispatch(saveBearerToken(bearer_token));
        Toast.show(message, Toast.LONG);
        navigation.navigate('CreateProfile');
      } else if (status == 0) {
        Toast.show(message, Toast.LONG);
      }
    } else if (from == 'forgot') {
      console.log('inside forgot');
      const {bearer_token, data, message, status} = await postApi(
        verificationCode,
        send_data,
      );
      // console.log('result', result);
      if (status == 1) {
        dispatch(saveUserProfile(data));
        dispatch(saveBearerToken(bearer_token));
        Toast.show(message, Toast.LONG);
        navigation.navigate('ForgetPassword');
      } else if (status == 0) {
        Toast.show(message, Toast.LONG);
      }
    }
  };
  const onCompleteTimer = () => {
    setResendOtpActive(true);
  };
  console.log(
    'On OTP from',
    from,
    'temporaryUserId',
    user_id,
    'Platform',
    Platform,
  );
  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.flex8}>
          <HeaderMain
            navigateLeftIcon={navigation.pop}
            leftIcon={'chevron-back'}
            showSearch={false}
            showNotifications={false}
            headerText={'VERIFICATION'}
            navigation={navigation}
          />
          <View style={[styles.alignCenter, styles.alignSelfStretch]}>
            <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
            <View style={{paddingHorizontal: WP('2%')}}>
              <View
                style={[
                  styles.w_100,
                  styles.alignCenter,
                  styles.justifyCenter,
                ]}>
                <Text
                  style={[
                    style.subHeading,
                    styles.colorBlack,
                    styles.w_85,
                    {textAlign: 'center'},
                  ]}>
                  We have sent you an email containing VERIFICATION CODE and
                  instructions, please follow the instructions to verify your
                  email address.
                </Text>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={style.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={renderCell}
                  onEndEditing={whereToNavigate}
                />
              </View>
              <View
                style={[
                  styles.justifyCenter,
                  styles.alignCenter,
                  styles.margin2Percent,
                ]}>
                <CountdownCircleTimer
                  isPlaying
                  key={key}
                  duration={30}
                  colors={[colors.secondary, colors.primary]}
                  colorsTime={[6, 4]}
                  size={140}
                  onComplete={onCompleteTimer}>
                  {({remainingTime}) => {
                    const minutes = Math.floor((remainingTime % 3600) / 60);
                    const seconds = remainingTime % 60;
                    return (
                      <Text
                        style={{
                          color: colors.primary,
                          fontSize: size.medium,
                        }}>{`0${minutes}:${seconds}`}</Text>
                    );
                  }}
                </CountdownCircleTimer>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
          <Text style={styles.footerText}>
            Didn't recieve code ?{' '}
            <Text
              style={
                resendOtpActive
                  ? [styles.footerTextAuth, styles.colorPrimary]
                  : [styles.footerTextAuth, styles.colorGray]
              }
              onPress={resendOtp}>
              Resend
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default OTP;

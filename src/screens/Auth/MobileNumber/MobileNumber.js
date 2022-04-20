import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import PhoneInput from 'react-native-phone-number-input';
import { phone } from 'phone-shape';
import { appLogos } from '../../../assets';
import Toast from 'react-native-simple-toast';
import { WP, HP, colors, size } from '../../../utilities';
import HeaderMain from '../../../components/HeaderMain';
import FooterAuth from '../../../components/footerAuth';
import Logo from '../../../components/logo';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {
  validateUserLogin,
  saveUserProfile,
  saveBearerToken,
} from '../../../store/actions/authAction';
import { user_social_login } from '../../../utils/api';
import { postApi, getDeviceToken } from '../../../utils/apiFunction';
import styles from '../style';
import style from './styles';

const CELL_COUNT = 6;

const MobileNumber = ({ navigation }) => {
  const phoneInput = useRef(null);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phoneAccessToken, setPhoneAccessToken] = useState('');
  const [code, setCode] = useState('');

  const handlePress = async () => {
    if (!value) {
      Toast.show('Please Enter Phone Number', Toast.LONG);
      return;
    }
    const { countryCode, countryIso2, countryIso3, isValid, phoneNumber } =
      phone(formattedValue);
    if (isValid) {
      setLoading(!loading);
      try {
        const confirmation = await Auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
        setPhoneAccessToken(confirmation?._verificationId);
      } catch (error) {
        console.log('Invalid error.', error);
        Toast.show(
          'Maximum Number Of OTP Send Limit Reached',
          Toast.LONG,
        );
      }
      setLoading(false);
    } else {
      Toast.show(
        'Phone Number Is Not Valid Please Enter A Valid Phone Number',
        Toast.LONG,
      );
      return;
    }
  };
  const handlePhoneLogin = async () => {
    console.log('code', code);
    try {
      await confirm?.confirm(code);
      setConfirm(null);
      socialLogin(phoneAccessToken, 'phone');
    } catch (error) {
      Toast.show('Invalid code.', Toast.LONG);
    }
  };
  const socialLogin = async (user_social_token, user_social_type) => {
    const user_device_token = await getDeviceToken();
    const user_device_type = Platform.OS;
    const params = {
      user_social_token,
      user_social_type,
      user_device_token,
      user_device_type,
    };
    console.log('isnide socialLogin user_device_token: ', user_device_token);
    const { status, message, bearer_token, data } = await postApi(
      user_social_login,
      params,
    );
    if (status == 1) {
      if (data?.user_profile_complete === '0') {
        navigation.navigate('CreateProfile');
      } else if (data?.user_profile_complete === '1') {
        dispatch(saveUserProfile(data));
        dispatch(saveBearerToken(bearer_token));
        dispatch(validateUserLogin());
      }
      Toast.show(message, Toast.LONG);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  if (confirm) {
    return (
      <ValidateOtp
        navigation={navigation}
        setConfirm={setConfirm}
        handlePhoneLogin={handlePhoneLogin}
        code={code}
        setCode={setCode}
      />
    );
  }
  else {
    return (
      <View style={[styles.mainContainer, { padding: 16 }]}>
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
              headerText={'PHONE NUMBER'}
              navigation={navigation}
            />
            <View style={[styles.alignCenter, styles.alignSelfStretch]}>
              <Logo logo={appLogos.logo} marginVertical={HP('4%')} />
              <View
                style={[
                  styles.directionRow,
                  styles.marginVerticle1HalfPercent,
                ]}>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="US"
                  layout="first"
                  containerStyle={{ padding: 0, borderRadius: 10 }}
                  textContainerStyle={{ padding: 0, borderRadius: 10 }}
                  textInputStyle={{ padding: 0 }}
                  onChangeText={text => {
                    setValue(text);
                  }}
                  onChangeFormattedText={text => {
                    setFormattedValue(text);
                  }}
                  withDarkTheme
                  withShadow
                  autoFocus
                />
              </View>

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
          </View>
          <View
            style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
            <FooterAuth
              mainText={'Already have an account ? '}
              where={'Login here'}
              navigation={navigation}
              screen_name={'Login'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
};

export default MobileNumber;

const ValidateOtp = ({ navigation, setConfirm, handlePhoneLogin, code, setCode }) => {
  const [enableMask, setEnableMask] = useState(true);
  const ref = useBlurOnFulfill({ code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const backHandler = () => {
    setConfirm(null);
  };
  const renderCell = ({ index, symbol, isFocused }) => {
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
  return (
    <View style={[styles.mainContainer, { padding: 16 }]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.flex8}>
          <HeaderMain
            navigateLeftIcon={backHandler}
            leftIcon={'chevron-back'}
            showSearch={false}
            showNotifications={false}
            headerText={'VERIFICATION'}
            navigation={navigation}
          />
          <View style={[styles.alignCenter, styles.alignSelfStretch]}>
            <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
            <View style={{ paddingHorizontal: WP('2%') }}>
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
                    { textAlign: 'center' },
                  ]}>
                  We have sent you an email containing VERIFICATION CODE and
                  instructions, please follow the instructions to verify your
                  email address.
                </Text>
                <CodeField
                  ref={ref}
                  {...props}
                  value={code}
                  onChangeText={setCode}
                  cellCount={CELL_COUNT}
                  rootStyle={style.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={renderCell}
                  onEndEditing={handlePhoneLogin}
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
                  duration={30}
                  colors={[colors.secondary, colors.primary]}
                  colorsTime={[6, 4]}
                  size={140}>
                  {({ remainingTime }) => {
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
      </KeyboardAwareScrollView>
    </View>
  );
};

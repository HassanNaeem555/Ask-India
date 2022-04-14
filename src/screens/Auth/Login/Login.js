import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import * as EmailValidator from 'email-validator';
import DeviceInfo from 'react-native-device-info';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Toast from 'react-native-simple-toast';
import {
  validateUserLogin,
  saveUserProfile,
  saveBearerToken,
} from '../../../store/actions/authAction';
import FooterAuth from '../../../components/footerAuth';
import {appLogos} from '../../../assets';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {postApi} from '../../../utils/apiFunction';
import {login} from '../../../utils/api';
import styles from '../style';
import style from './styles';
import {WP, HP, colors} from '../../../utilities';

var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .has()
  .symbols();

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  let deviceId = DeviceInfo.getDeviceId();
  const {navigate} = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsgPassword, seterrorMsgPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onChangeEmail = val => {
    setEmail(val);
  };
  const onChangePassword = val => {
    setPassword(val);
  };
  const handlePress = async () => {
    if (!email) {
      Toast.show('Please enter Email', Toast.LONG);
      return;
    }
    if (!EmailValidator.validate(email)) {
      Toast.show('Email not valid', Toast.LONG);
      return;
    }
    if (!password) {
      Toast.show('Please enter Password', Toast.LONG);
      return;
    }
    if (!schema.validate(password)) {
      Toast.show(
        'Password not valid (Use atleast one UpperCase Letter, one number and one special character)',
        Toast.LONG,
      );
      return;
    }
    setLoading(!loading);
    let user_data = {
      user_email: email,
      user_password: password,
      user_device_type: Platform.OS,
      user_device_token: deviceId,
    };
    const {status, message, bearer_token, data} = await postApi(
      login,
      user_data,
    );
    setLoading(false);
    if (status == 1) {
      dispatch(saveUserProfile(data));
      dispatch(saveBearerToken(bearer_token));
      dispatch(validateUserLogin());
      Toast.show(message, Toast.LONG);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const changeScreen = screen_name => {
    navigate(screen_name);
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
          headerText={'LOGIN'}
          navigation={navigation}
        />
        <View style={styles.flex8}>
          <View style={[styles.alignCenter, styles.alignSelfStretch]}>
            <Logo logo={appLogos.logo} marginVertical={HP('3%')} />
            <CustomInput
              placeholder={'Enter Your Email Address'}
              iconName={'email'}
              iconType={'fontisto'}
              leftIconShow={true}
              error_message={errorMsg}
              change={onChangeEmail}
            />
            <CustomInput
              placeholder={'Enter Your Password'}
              iconName={showPassword ? 'lock' : 'lock-open'}
              iconType={'entypo'}
              leftIconShow={true}
              iconNameRight={showPassword ? 'eye-with-line' : 'eye'}
              rightIconShow={true}
              rightIconColor={colors.gray}
              handlePress={handleShowPassword}
              secureTextEntry={showPassword}
              error_message={errorMsgPassword}
              change={onChangePassword}
            />
            <TouchableOpacity
              style={[styles.alignSelfCenter, styles.marginVerticle3Percent]}
              activeOpacity={0.7}
              onPress={() => changeScreen('ForgotPassword')}>
              <Text style={style.loginText1}>FORGET PASSWORD ?</Text>
            </TouchableOpacity>
            <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
              {loading ? (
                <LoadingButton width={WP('90%')} />
              ) : (
                <Button
                  buttonText={'LOGIN'}
                  handlePress={handlePress}
                  width={WP('90%')}
                />
              )}
            </View>
          </View>
        </View>
        <View style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
          <FooterAuth
            mainText={"Don't have an account ? "}
            where={'Signup here'}
            navigation={navigation}
            screen_name={'Signup'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

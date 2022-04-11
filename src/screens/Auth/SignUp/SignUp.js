import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import * as EmailValidator from 'email-validator';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {appLogos} from '../../../assets';
import {WP, HP, colors} from '../../../utilities';
import HeaderMain from '../../../components/HeaderMain';
import FooterAuth from '../../../components/footerAuth';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {postApi} from '../../../utils/apiFunction';
import {saveTemporaryUserId} from '../../../store/actions/authAction';
import {register} from '../../../utils/api';
import styles from '../style';

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

const SignUp = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsgPassword, seterrorMsgPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onChangeEmail = val => {
    setEmail(val);
  };
  const onChangePassword = val => {
    setPassword(val);
  };
  const onChangeConfirmPassword = val => {
    setConfirmPassword(val);
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
    if (password !== confirmPassword) {
      Toast.show('Password & Confirm Password Need To Be Same', Toast.LONG);
      return;
    }
    setLoading(!loading);
    let user_data = {user_email: email, user_password: password};
    const {data, status, message} = await postApi(register, user_data);
    setLoading(false);
    if (status == 1) {
      Toast.show(message, Toast.LONG);
      dispatch(saveTemporaryUserId(data));
      navigate('OTP', {from: 'signup'});
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const changeScreen = screen_name => {
    navigate(screen_name);
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
          headerText={'SIGNUP'}
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
            <CustomInput
              placeholder={'Confirm Password'}
              iconName={showConfirmPassword ? 'lock' : 'lock-open'}
              iconType={'entypo'}
              leftIconShow={true}
              iconNameRight={showConfirmPassword ? 'eye-with-line' : 'eye'}
              rightIconShow={true}
              rightIconColor={colors.gray}
              handlePress={handleShowConfirmPassword}
              secureTextEntry={showConfirmPassword}
              error_message={errorMsgPassword}
              change={onChangeConfirmPassword}
            />
            <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
              {loading ? (
                <LoadingButton width={WP('90%')} />
              ) : (
                <Button
                  buttonText={'SIGNUP'}
                  handlePress={handlePress}
                  width={WP('90%')}
                />
              )}
            </View>
          </View>
        </View>
        <View style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
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
};

export default SignUp;

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {appLogos} from '../../../assets';
import Img from '../../../components/Img';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';
// redux stuff
const SignUp = ({navigation}) => {
  const {navigate} = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsgPassword, seterrorMsgPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
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
  const handlePress = () => {
    // navigate('Pin');
  };
  const changeScreen = screen_name => {
    navigate(screen_name);
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[
        styles.alignCenter,
        styles.justifyEvenly,
        {flexGrow: 1},
      ]}
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Img
          local={true}
          resizeMode={'contain'}
          style={style.splashLogo}
          src={appLogos.logo}
        />
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
          iconType={'simple-line-icons'}
          leftIconShow={true}
          handlePress={handleShowPassword}
          secureTextEntry={showPassword}
          error_message={errorMsgPassword}
          change={onChangePassword}
        />
        <CustomInput
          placeholder={'Confirm Password'}
          iconName={showConfirmPassword ? 'lock' : 'lock-open'}
          iconType={'simple-line-icons'}
          leftIconShow={true}
          handlePress={handleShowConfirmPassword}
          secureTextEntry={showConfirmPassword}
          error_message={errorMsgPassword}
          change={onChangeConfirmPassword}
        />
        <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
          <Button buttonText={'SIGNUP'} handlePress={handlePress} />
        </View>
        <Text style={[style.loginText, styles.marginVerticle4Percent]}>
          Don't have an account?{' '}
          <Text style={style.loginText1} onPress={() => navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;

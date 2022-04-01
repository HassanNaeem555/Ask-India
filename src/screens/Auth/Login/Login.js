import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {validateUserLogin} from '../../../store/actions/authAction';
import FooterAuth from '../../../components/footerAuth';
import {appLogos} from '../../../assets';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';
import {WP, HP} from '../../../utilities';
// redux stuff
const {width} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsgPassword, seterrorMsgPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onChangeEmail = val => {
    setEmail(val);
  };
  const onChangePassword = val => {
    setPassword(val);
  };
  const handlePress = () => {
    dispatch(validateUserLogin());
    // navigate('Pin');
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
              iconType={'simple-line-icons'}
              leftIconShow={true}
              handlePress={handleShowPassword}
              secureTextEntry={showPassword}
              error_message={errorMsgPassword}
              change={onChangePassword}
            />
            <TouchableOpacity
              style={[styles.alignSelfCenter, styles.marginVerticle3Percent]}
              activeOpacity={0.7}
              onPress={() => changeScreen('ForgotPassword')}>
              <Text style={style.loginText1}>Forget Password?</Text>
            </TouchableOpacity>
            <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
              <Button
                buttonText={'LOGIN'}
                handlePress={handlePress}
                width={WP('90%')}
              />
            </View>
          </View>
        </View>
        <View style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
          <FooterAuth
            mainText={"Don't have an account ? "}
            where={'Sign up here'}
            navigation={navigation}
            screen_name={'Signup'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

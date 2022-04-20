import React, {useEffect} from 'react';
import {View, Text, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import Auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {colors, HP} from '../../../utilities';
import SplashScreen from 'react-native-splash-screen';
import {appLogos} from '../../../assets';
import FooterAuth from '../../../components/footerAuth';
import Logo from '../../../components/logo';
import SocialButton from '../../../components/socialButton';
import {
  validateUserLogin,
  saveSocialUserProfile,
  saveUserProfile,
  saveBearerToken,
} from '../../../store/actions/authAction';
import {user_social_login} from '../../../utils/api';
import {postApi, getDeviceToken} from '../../../utils/apiFunction';
import styles from '../style';
import style from './styles';

const SelectAuth = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const onAppleButtonPress = async () => {
    console.log('onAppleButtonPress');
    // performs login request
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      const {identityToken, nonce} = appleAuthRequestResponse;
      const appleCredential = Auth?.AppleAuthProvider?.credential(
        identityToken,
        nonce,
      );
      const {additionalUserInfo, user} = await Auth()?.signInWithCredential(
        appleCredential,
      );
      console.log('credentialState user', user?._user);
      socialLogin(appleAuthRequestResponse?.user, 'apple', user?._user);
    } catch (error) {
      console.log(error);
      Toast.show('Unable to sign in with Apple');
    }
  };
  const onFacebookButtonPress = async () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(async login => {
        if (login.isCancelled) {
        } else {
          try {
            const fbAuth = await AccessToken.getCurrentAccessToken();
            const fbCredential = Auth.FacebookAuthProvider.credential(
              fbAuth.accessToken,
            );
            const userAuth = await Auth().signInWithCredential(fbCredential);
            const access_token = await userAuth.user.getIdToken();
            const {additionalUserInfo, user} = userAuth;
            socialLogin(access_token, 'facebook', user);
          } catch (error) {}
        }
      })
      .catch(error => console.log('Error generating audio file: ' + error));
  };
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = Auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );

      const userAuth = await Auth().signInWithCredential(googleCredential);
      const access_token = await (await userAuth.user.getIdToken()).toString();
      const {additionalUserInfo, user} = userAuth;
      console.log(access_token, 'google');
      console.log(user, 'user google');
      socialLogin(access_token, 'google', user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Toast.show('User Cancelled the Login Flow', Toast.LONG);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Toast.show('Signing In', Toast.LONG);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        console.log('error.message', error.message);
        Toast.show(error.message, Toast.LONG);
      }
    }
  };
  const socialLogin = async (user_social_token, user_social_type, user) => {
    const user_device_token = await getDeviceToken();
    const user_device_type = Platform.OS;
    const params = {
      user_social_token,
      user_social_type,
      user_device_token,
      user_device_type,
    };
    console.log('isnide socialLogin user_device_token: ', user_device_token);
    const {status, message, bearer_token, data} = await postApi(
      user_social_login,
      params,
    );
    if (status == 1) {
      dispatch(saveSocialUserProfile(user));
      dispatch(saveUserProfile(data));
      dispatch(saveBearerToken(bearer_token));
      dispatch(validateUserLogin());
      Toast.show(message, Toast.LONG);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flex8}>
        <View style={[styles.alignCenter, styles.alignSelfStretch]}>
          <Text style={[style.heading, {marginVertical: HP('5%')}]}>
            PRE LOGIN
          </Text>
          <Logo logo={appLogos.logo} />
          <View style={[styles.marginVerticle2Percent]}>
            <SocialButton
              backgroundColor={colors.primary}
              gradientColor={colors.secondary}
              iconName={'mail'}
              iconText={'LOGIN WITH EMAIL'}
              iconType={true}
              navigate={navigate}
              screen_name={'Login'}
            />
            <SocialButton
              backgroundColor={'#4A4949'}
              gradientColor={'#1E1E1E'}
              iconName={'phone'}
              iconText={'LOGIN WITH PHONE'}
              iconType={false}
              navigate={navigate}
              screen_name={'MobileNumber'}
            />
            {Platform.OS == 'ios' && (
              <SocialButton
                backgroundColor={'#4A4949'}
                gradientColor={'#1E1E1E'}
                iconName={'apple1'}
                iconText={'Signin with Apple'}
                iconType={true}
                is_social={true}
                socialLogin={onAppleButtonPress}
              />
            )}
            <SocialButton
              backgroundColor={colors.facebookColor}
              gradientColor={'#1778F1'}
              iconName={'facebook-square'}
              iconText={'LOGIN WITH FACEBOOK'}
              iconType={true}
              is_social={true}
              socialLogin={onFacebookButtonPress}
            />
            <SocialButton
              backgroundColor={colors.googleColor}
              gradientColor={'#EF4235'}
              iconName={'google'}
              iconText={'LOGIN WITH GOOGLE'}
              iconType={true}
              is_social={true}
              socialLogin={onGoogleButtonPress}
            />
          </View>
        </View>
      </View>
      <View style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
        <FooterAuth
          mainText={"Don't have an account?"}
          where={'Sign up here'}
          navigation={navigation}
          screen_name={'Signup'}
        />
      </View>
    </View>
  );
};

export default SelectAuth;

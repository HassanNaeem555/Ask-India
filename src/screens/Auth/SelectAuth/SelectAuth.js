import React, {useState, useEffect} from 'react';
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
import Loader from '../../../components/Loader';
import {
  validateUserLogin,
  saveSocialUserProfile,
  saveUserProfile,
  saveBearerToken,
} from '../../../store/actions/authAction';
import {user_social_login} from '../../../services/api';
import {postApi, getDeviceToken} from '../../../services/apiFunction';
import styles from '../style';
import style from './styles';

const SelectAuth = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [loaderVisible, setLoaderVisible] = useState(false);
  const onAppleButtonPress = async () => {
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
      const user_firebase = await Auth().currentUser;
      if (user_firebase) {
        socialLogin(user?.uid, 'apple', user?._user);
      }
    } catch (error) {
      Toast.show('Unable to sign in with Apple');
    }
  };
  const onFacebookButtonPress = async () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(async login => {
        if (login.isCancelled) {
          Toast.show('Unfortunately Facebook Login Is Cancelled');
        } else {
          try {
            const fbAuth = await AccessToken.getCurrentAccessToken();
            const fbCredential = Auth.FacebookAuthProvider.credential(
              fbAuth.accessToken,
            );
            const userAuth = await Auth().signInWithCredential(fbCredential);
            const user_firebase = await Auth().currentUser;
            const {additionalUserInfo, user} = userAuth;
            if (user_firebase) {
              socialLogin(user?.uid, 'facebook', user);
            }
          } catch (error) {
            Toast.show('Unfortunately Facebook Login Is Cancelled');
          }
        }
      })
      .catch(error => {
        Toast.show('Error Generated While Facebook Login: ' + error);
      });
  };
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = Auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      const userAuth = await Auth().signInWithCredential(googleCredential);
      const {additionalUserInfo, user} = userAuth;
      const user_firebase = await Auth().currentUser;
      if (user_firebase) {
        socialLogin(user?.uid, 'google', user);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Toast.show('User Cancelled the Google Login', Toast.LONG);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Toast.show('Signing In', Toast.LONG);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
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
    const {status, message, bearer_token, data} = await postApi(
      user_social_login,
      params,
    );
    if (status == 1) {
      dispatch(saveUserProfile(data));
      dispatch(saveSocialUserProfile(user));
      dispatch(saveBearerToken(bearer_token));
      if (data?.user_profile_complete === '0' || 0) {
        navigation.navigate('CreateProfile');
      } else if (data?.user_profile_complete === '1' || 1) {
        dispatch(validateUserLogin());
      }
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
                iconText={'LOGIN WITH APPLE'}
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
      <Loader visible={loaderVisible} />
    </View>
  );
};

export default SelectAuth;

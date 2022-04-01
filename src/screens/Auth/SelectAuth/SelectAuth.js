import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {colors, HP} from '../../../utilities';
import SplashScreen from 'react-native-splash-screen';
import {CheckBox} from 'react-native-elements';
import {appLogos} from '../../../assets';
import FooterAuth from '../../../components/footerAuth';
import Logo from '../../../components/logo';
import SocialButton from '../../../components/socialButton';
import styles from '../style';
import style from './styles';
// redux stuff
const SelectAuth = ({navigation}) => {
  const [termsCondition, setTermsCondition] = useState(false);
  const {navigate} = navigation;
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flex8}>
        <View style={[styles.alignCenter, styles.alignSelfStretch]}>
          <Logo logo={appLogos.logo} marginVertical={HP('4%')} />
          <SocialButton
            backgroundColor={colors.primary}
            gradientColor={colors.secondary}
            iconName={'phone'}
            iconText={'Signin with Phone'}
            navigate={navigate}
            screen_name={'MobileNumber'}
          />
          <SocialButton
            backgroundColor={colors.primary}
            gradientColor={colors.secondary}
            iconName={'mail'}
            iconText={'Signin with Email'}
            navigate={navigate}
            screen_name={'Login'}
          />
          <SocialButton
            backgroundColor={'#4A4949'}
            gradientColor={'#1E1E1E'}
            iconName={'apple1'}
            iconText={'Signin with Apple'}
            navigate={navigate}
          />
          <SocialButton
            backgroundColor={colors.facebookColor}
            gradientColor={'#1778F1'}
            iconName={'facebook-square'}
            iconText={'Signin with Facebook'}
            navigate={navigate}
          />
          <SocialButton
            backgroundColor={colors.googleColor}
            gradientColor={'#EF4235'}
            iconName={'google'}
            iconText={'Signin with Google'}
            navigate={navigate}
          />
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

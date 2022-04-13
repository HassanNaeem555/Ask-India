import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Platform} from 'react-native';
import {colors, HP} from '../../../utilities';
import SplashScreen from 'react-native-splash-screen';
import {appLogos} from '../../../assets';
import FooterAuth from '../../../components/footerAuth';
import Logo from '../../../components/logo';
import SocialButton from '../../../components/socialButton';
import styles from '../style';
import style from './styles';

const SelectAuth = ({navigation}) => {
  const {navigate} = navigation;
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
              navigate={navigate}
              screen_name={'Login'}
              iconType={true}
            />
            <SocialButton
              backgroundColor={'#4A4949'}
              gradientColor={'#1E1E1E'}
              iconName={'phone'}
              iconText={'LOGIN WITH PHONE'}
              iconType={false}
              // navigate={navigate}
              // screen_name={'MobileNumber'}
            />
            {Platform.OS == 'ios' && (
              <SocialButton
                backgroundColor={'#4A4949'}
                gradientColor={'#1E1E1E'}
                iconName={'apple1'}
                iconText={'Signin with Apple'}
                iconType={true}
                // navigate={navigate}
              />
            )}
            <SocialButton
              backgroundColor={colors.facebookColor}
              gradientColor={'#1778F1'}
              iconName={'facebook-square'}
              iconText={'LOGIN WITH FACEBOOK'}
              iconType={true}
              // navigate={navigate}
            />
            <SocialButton
              backgroundColor={colors.googleColor}
              gradientColor={'#EF4235'}
              iconName={'google'}
              iconText={'LOGIN WITH GOOGLE'}
              iconType={true}
              // navigate={navigate}
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

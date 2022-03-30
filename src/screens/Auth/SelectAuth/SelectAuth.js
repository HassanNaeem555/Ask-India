import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {colors, HP} from '../../../utilities';
import SplashScreen from 'react-native-splash-screen';
import {appLogos} from '../../../assets';
import Logo from '../../../components/logo';
import SocialButton from '../../../components/socialButton';
import styles from '../style';
import style from './styles';
// redux stuff
const SelectAuth = ({navigation}) => {
  const {navigate} = navigation;
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ScrollView
      contentContainerStyle={[
        styles.alignCenter,
        styles.justifyEvenly,
        {flexGrow: 1},
      ]}
      style={styles.mainContainer}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
        <SocialButton
          backgroundColor={colors.primary}
          gradientColor={colors.secondary}
          iconName={'phone'}
          iconText={'Signin with Phone'}
          navigate={navigate}
          screen_name={'Agreement'}
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
    </ScrollView>
  );
};

export default SelectAuth;

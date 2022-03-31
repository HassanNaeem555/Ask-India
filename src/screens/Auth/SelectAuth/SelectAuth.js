import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {colors, HP} from '../../../utilities';
import SplashScreen from 'react-native-splash-screen';
import {CheckBox} from 'react-native-elements';
import {appLogos} from '../../../assets';
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
        <View style={styles.justifyEnd}>
          <Text style={[style.loginText, styles.marginVerticle4Percent]}>
            Don't have an account?{' '}
            <Text style={style.loginText1} onPress={() => navigate('Signup')}>
              Sign up here
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectAuth;

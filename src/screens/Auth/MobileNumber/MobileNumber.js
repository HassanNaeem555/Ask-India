import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {appLogos} from '../../../assets';
import PhoneInput from 'react-native-phone-number-input';
import Toast from 'react-native-simple-toast';
import {WP, HP} from '../../../utilities';
import HeaderMain from '../../../components/HeaderMain';
import FooterAuth from '../../../components/footerAuth';
import Logo from '../../../components/logo';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';

const MobileNumber = ({navigation}) => {
  const phoneInput = useRef(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const handlePress = () => {
    if (!value) {
      Toast.show('Please Enter Phone Number', Toast.LONG);
      return;
    }
    console.log('runnung');
    navigation.navigate('OTP', {from: 'MobileNumber'});
  };
  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.flex8}>
          <HeaderMain
            navigateLeftIcon={navigation.pop}
            leftIcon={'chevron-back'}
            showSearch={false}
            showNotifications={false}
            headerText={'PHONE NUMBER'}
            navigation={navigation}
          />
          <View style={[styles.alignCenter, styles.alignSelfStretch]}>
            <Logo logo={appLogos.logo} marginVertical={HP('4%')} />
            <View
              style={[styles.directionRow, styles.marginVerticle1HalfPercent]}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="US"
                layout="first"
                containerStyle={{padding: 0, borderRadius: 10}}
                textContainerStyle={{padding: 0, borderRadius: 10}}
                textInputStyle={{padding: 0}}
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
              />
            </View>

            <View style={[styles.alignCenter, styles.marginVerticle1Percent]}>
              <Button
                buttonText={'CONTINUE'}
                handlePress={handlePress}
                width={WP('82%')}
              />
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

export default MobileNumber;

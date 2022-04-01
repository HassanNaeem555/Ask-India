import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {appLogos} from '../../../assets';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import {WP, HP} from '../../../utilities';
import styles from '../style';
import style from './styles';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const onChangeEmail = val => {
    setEmail(val);
  };
  const handlePress = () => {
    navigation.navigate('OTP', {from: 'forget'});
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
          headerText={'FORGET PASSWORD'}
          navigation={navigation}
        />
        <View style={[styles.alignCenter, styles.alignSelfStretch]}>
          <Logo logo={appLogos.logo} marginVertical={HP('5%')} />
          <CustomInput
            placeholder={'Enter Your Email Address'}
            iconName={'email'}
            iconType={'fontisto'}
            leftIconShow={true}
            error_message={errorMsg}
            change={onChangeEmail}
          />
          <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
            <Button
              buttonText={'GET CODE'}
              handlePress={handlePress}
              width={WP('90%')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPassword;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as EmailValidator from 'email-validator';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {appLogos} from '../../../assets';
import Toast from 'react-native-simple-toast';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {forgotPassword} from '../../../services/api';
import {postApi} from '../../../services/apiFunction';
import {saveTemporaryUserId} from '../../../store/actions/authAction';
import {WP, HP} from '../../../utilities';
import styles from '../style';

const ForgotPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const onChangeEmail = val => {
    setEmail(val);
  };
  const handlePress = async () => {
    if (!email) {
      Toast.show('Please enter Email', Toast.LONG);
      return;
    }
    if (!EmailValidator.validate(email)) {
      Toast.show('Email not valid', Toast.LONG);
      return;
    }
    setLoading(!loading);
    const {status, message, data} = await postApi(forgotPassword, {
      user_email: email,
    });
    console.log('message', message, 'status', status);
    setLoading(false);
    if (status == 1) {
      dispatch(saveTemporaryUserId(data));
      navigation.navigate('OTP', {from: 'forgot'});
      Toast.show(message, Toast.LONG);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
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
            {loading ? (
              <LoadingButton width={WP('90%')} />
            ) : (
              <Button
                buttonText={'GET CODE'}
                handlePress={handlePress}
                width={WP('90%')}
              />
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPassword;

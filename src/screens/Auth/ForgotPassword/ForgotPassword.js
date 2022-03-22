import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {appLogos} from '../../../assets';
import Img from '../../../components/Img';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const onChangeEmail = val => {
    setEmail(val);
  };
  const handlePress = () => {
    navigation.pop();
  };
  return (
    <View
      style={[
        styles.mainContainer,
        styles.alignCenter,
        styles.justifyEvenly,
        {flexGrow: 1},
      ]}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Img
          local={true}
          resizeMode={'contain'}
          style={style.splashLogo}
          src={appLogos.logo}
        />
        <Text style={[style.forgotText, styles.marginVerticle2Percent]}>
          Forgot Password
        </Text>
        <CustomInput
          placeholder={'Enter Your Email Address'}
          iconName={'email'}
          iconType={'fontisto'}
          leftIconShow={true}
          error_message={errorMsg}
          change={onChangeEmail}
        />
        <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
          <Button buttonText={'DONE'} handlePress={handlePress} />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

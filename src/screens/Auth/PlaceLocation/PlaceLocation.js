import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {appLogos} from '../../../assets';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import {WP, HP} from '../../../utilities';
import styles from '../style';
import style from './styles';

const PlaceLocation = ({navigation}) =>{
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const onChangeEmail = val => {
    setEmail(val);
  };
  const handlePress = () => {
    navigation.pop();
  };
  return (
    <ScrollView
    style={styles.mainContainer}
    contentContainerStyle={[styles.alignCenter, {flexGrow: 1, padding: 16}]}>
    <View
      style={{
        alignSelf: 'stretch',
        alignItems: 'center',
      }}>
      <Logo logo={appLogos.logo} marginVertical={HP('5%')} />
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
        <Button
          buttonText={'DONE'}
          handlePress={handlePress}
          width={WP('90%')}
        />
      </View>
    </View>
  </ScrollView>
  )
}

export default PlaceLocation
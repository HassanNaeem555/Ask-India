import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {appLogos} from '../../../assets';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import ButtonNoBg from '../../../components/ButtonNoBg';
import Button from '../../../components/Button';
import {WP, HP} from '../../../utilities';
import styles from '../style';
import style from './styles';

const PlaceLocation = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const onChangeEmail = val => {
    setEmail(val);
  };
  const handlePress = () => {
    navigation.navigate('EnrolledProgram');
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={[styles.alignCenter, {flexGrow: 1, padding: 16}]}>
      <View style={[styles.alignCenter, styles.alignSelfStretch]}>
        <Logo logo={appLogos.logo} marginVertical={HP('5%')} />
        <CustomInput
          label={'Enter Your City and State'}
          placeholder={'Enter State Name'}
          iconName={'map'}
          iconType={'fontisto'}
          leftIconShow={true}
          error_message={errorMsg}
          change={onChangeEmail}
        />
        <View style={styles.margin4Percent} />
        <CustomInput
          placeholder={'Enter City Name'}
          iconName={'map'}
          iconType={'fontisto'}
          leftIconShow={true}
          error_message={errorMsg}
          change={onChangeEmail}
        />
        <View
          style={[
            styles.directionRow,
            styles.alignCenter,
            styles.marginVerticle2Percent,
          ]}>
          <ButtonNoBg
            buttonText={'PREVIOUS'}
            handlePress={goBack}
            width={WP('45%')}
            rightMargin={HP('1%')}
          />
          <Button
            buttonText={'NEXT'}
            handlePress={handlePress}
            width={WP('45%')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceLocation;

import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {appLogos} from '../../../assets';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
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
          headerText={'CREATE PROFILE'}
          navigation={navigation}
        />
        <View style={[styles.alignCenter, styles.alignSelfStretch]}>
          <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
          <CustomInput
            placeholder={'Enter State Name'}
            iconName={'map'}
            iconType={'fontisto'}
            leftIconShow={true}
            error_message={errorMsg}
            change={onChangeEmail}
          />
          <CustomInput
            placeholder={'Enter City Name'}
            iconName={'map'}
            iconType={'fontisto'}
            leftIconShow={true}
            error_message={errorMsg}
            change={onChangeEmail}
          />
          <View style={[styles.alignCenter, styles.marginVerticle1Percent]}>
            <Button
              buttonText={'CONTINUE'}
              handlePress={handlePress}
              width={WP('90%')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default PlaceLocation;

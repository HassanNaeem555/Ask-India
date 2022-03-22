import React, {useState} from 'react';
import {View} from 'react-native';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import Logo from '../../../components/logo';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';

const ContinueAs = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('CreateProfile');
  };
  return (
    <View
      style={[
        styles.mainContainer,
        styles.alignCenter,
        {flexGrow: 1, backgroundColor: '#fbfbfb'},
      ]}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Logo logo={appLogos.logo} marginVertical={HP('5%')} />
        <View style={[styles.alignCenter, styles.marginVerticle1Percent]}>
          <Button
            buttonText={'Continue as a Professionals'}
            handlePress={handlePress}
            width={WP('90%')}
          />
        </View>
        <View style={[styles.alignCenter, styles.marginVerticle1Percent]}>
          <Button
            buttonText={'Continue as a Student'}
            handlePress={handlePress}
            width={WP('90%')}
          />
        </View>
      </View>
    </View>
  );
};

export default ContinueAs;

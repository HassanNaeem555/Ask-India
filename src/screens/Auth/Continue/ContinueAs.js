import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import {appImages} from '../../../assets/index';
import Img from '../../../components/Img';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import styles from '../style';
import style from './styles';

const ContinueAs = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('CreateProfile');
  };
  return (
    <View style={[styles.mainContainer, {padding: 16, flexGrow: 1}]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'ROLE SELECTION'}
        navigation={navigation}
      />
      <View style={[styles.alignCenter, styles.alignSelfStretch]}>
        <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
        <View style={[styles.alignCenter, styles.marginVerticle3Percent]}>
          <LinearGradient
            colors={[colors.secondary, colors.primary]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={[
              styles.margin1Percent,
              styles.directionRow,
              styles.w_90,
              {borderRadius: 15, height: HP('15%')},
            ]}>
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.9}
              style={[
                styles.w_90,
                styles.directionRow,
                styles.justifySpaceAround,
                styles.alignCenter,
              ]}>
              <Img
                local={true}
                resizeMode={'contain'}
                style={[style.logo]}
                src={appImages?.teacherImage}
              />
              <Text style={style.heading}>Professionals</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={[styles.alignCenter, styles.marginVerticle3Percent]}>
          <LinearGradient
            colors={[colors.secondary, colors.primary]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={[
              styles.margin1Percent,
              styles.directionRow,
              styles.w_90,
              {borderRadius: 15, height: HP('15%')},
            ]}>
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.9}
              style={[
                styles.w_90,
                styles.directionRow,
                styles.justifySpaceAround,
                styles.alignCenter,
              ]}>
              <Text style={style.heading}>Students</Text>
              <Img
                local={true}
                resizeMode={'contain'}
                style={[style.logo]}
                src={appImages?.studentImage}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default ContinueAs;

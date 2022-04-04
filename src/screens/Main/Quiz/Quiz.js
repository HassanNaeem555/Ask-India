import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Button from '../../../components/Button';
import CustomInput from '../../../components/CustomInput';
import Image from '../../../components/Img';
import HeaderMain from '../../../components/HeaderMain';
import {appIcons} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Quiz = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'QUIZ QUESTIONS'}
        navigation={navigation}
      />
    </View>
  );
};

export default Quiz;

import React, {useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import {Card} from 'react-native-elements';
import Button from '../../../components/Button';
import Image from '../../../components/Img';
import HeaderMain from '../../../components/HeaderMain';
import {appIcons} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';
const {width} = Dimensions.get('window');
const Quiz = ({navigation, route}) => {
  const {id, title} = route.params;
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
      <View style={[styles.paddingHorizontal3Percent, {flex: 1.5}]}>
        <Text style={[style.subHeading, styles.marginVerticleHalfPercent]}>
          Questions: 2 / 6
        </Text>
        <View style={[styles.justifyCenter, styles.alignCenter]}>
          <Progress.Bar
            progress={1}
            width={width * 0.9}
            height={10}
            color={colors.primary}
            borderColor={colors.primary}
            borderRadius={8}
          />
        </View>
        <Text
          style={[
            style.heading,
            styles.colorPrimary,
            styles.marginVerticleHalfPercent,
          ]}>
          Topic: <Text style={styles.colorBlack}>{title}</Text>
        </Text>
      </View>
      <View style={[styles.paddingHorizontal3Percent, {flex: 8.5}]}>
        <Card
          containerStyle={{
            borderRadius: 10,
            marginHorizontal: 0,
            borderWidth: 0,
          }}>
          <Text>Look</Text>
        </Card>
      </View>
    </View>
  );
};

export default Quiz;

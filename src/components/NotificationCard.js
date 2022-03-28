import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import Button from './Button';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Image from './Img';
import {appImages, appLogos} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const NotificationCard = () => {
  return (
    <Card>
      <Text
        numberOfLines={2}
        style={[style.notificationText, styles.marginHalfPercent]}>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </Text>
      <View
        style={[
          styles.directionRow,
          styles.justifySpaceBetween,
          styles.margin1Percent,
        ]}>
        <Text style={style.dateTime}>
          {new Date().getDate()} - {new Date().getMonth() + 1} -
          {new Date().getYear()}{' '}
        </Text>
        <Text style={style.dateTime}>
          {new Date().getHours()} : {new Date().getMinutes()}
        </Text>
      </View>
    </Card>
  );
};

export default NotificationCard;

const style = StyleSheet.create({
  notificationText: {
    color: colors.black,
    fontSize: size.xxsmall,
    letterSpacing: 0.4,
    fontWeight: 'bold',
    lineHeight: 21,
  },
  dateTime: {
    fontSize: size.tiny,
    fontWeight: '400',
  },
});

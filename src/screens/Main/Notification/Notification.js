import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import HeaderMain from '../../../components/HeaderMain';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Notification = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'ios-caret-back-outline'}
        showSearch={false}
        showNotifications={false}
        headerText={'Notifications'}
        navigation={navigation}
      />
      <ScrollView>
        <Card>
          <Text
            numberOfLines={2}
            style={[style.notificationText, styles.marginHalfPercent]}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
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
      </ScrollView>
    </View>
  );
};

export default Notification;

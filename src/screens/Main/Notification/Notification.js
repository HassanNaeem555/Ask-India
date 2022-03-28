import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import HeaderMain from '../../../components/HeaderMain';
import NotificationCard from '../../../components/NotificationCard';
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
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView>
    </View>
  );
};

export default Notification;

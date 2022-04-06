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
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={true}
        headerText={'NOTIFICATIONS'}
        navigation={navigation}
      />
      <ScrollView style={[styles.marginHorizontal2Percent]}>
        <Text style={style.when}>New</Text>
        <NotificationCard which={'like'} what={'Like your photo'} />
        <NotificationCard which={'comment'} what={'Comment on your Post'} />
        <NotificationCard which={'share'} what={'Share your Post'} />
        <Text style={style.when}>Today</Text>
        <NotificationCard which={'like'} what={'Like your post'} />
        <Text style={style.when}>This Month</Text>
        <NotificationCard which={'comment'} what={'Comment on your Post'} />
        <NotificationCard which={'share'} what={'Share your Post'} />
        <NotificationCard which={'like'} what={'Like your post'} />
      </ScrollView>
    </View>
  );
};

export default Notification;

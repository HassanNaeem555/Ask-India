import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderMain from '../../../components/HeaderMain';
import FollowCard from '../../../components/FollowCard';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Following = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'ios-caret-back-outline'}
        showSearch={true}
        showNotifications={false}
        headerText={'Following'}
        navigation={navigation}
      />
      <ScrollView>
        <FollowCard showFollowButton={false} />
        <FollowCard showFollowButton={false} />
        <FollowCard showFollowButton={false} />
        <FollowCard showFollowButton={false} />
        <FollowCard showFollowButton={false} />
      </ScrollView>
    </View>
  );
};

export default Following;

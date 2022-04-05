import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderMain from '../../../../components/HeaderMain';
import MessageUserCard from '../../../../components/MessageUserCard';
import {WP, HP, colors, size} from '../../../../utilities';
import styles from '../../style';
import style from './styles';

const Users = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'Message'}
        navigation={navigation}
      />
      <ScrollView>
        <MessageUserCard navigation={navigation} />
        <MessageUserCard navigation={navigation} />
        <MessageUserCard navigation={navigation} />
        <MessageUserCard navigation={navigation} />
        <MessageUserCard navigation={navigation} />
        <MessageUserCard navigation={navigation} />
        <MessageUserCard navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Users;

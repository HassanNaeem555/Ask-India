import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const HeaderMain = ({
  navigateLeftIcon,
  leftIcon,
  showSearch,
  showNotifications,
  headerText,
  navigation,
}) => {
  return (
    <View
      style={[
        styles.directionRow,
        styles.justifySpaceBetween,
        styles.padding3Percent,
        styles.paddingHorizontal2Percent,
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigateLeftIcon && navigateLeftIcon();
        }}>
        <Ionicons name={leftIcon} size={size.h3} color={colors.black} />
      </TouchableOpacity>
      <Text style={style.headerHeading}>{headerText}</Text>
      <View style={[styles.directionRow, styles.justifySpaceBetween]}>
        {showSearch && (
          <TouchableOpacity
            style={style.marginRight}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Search')}>
            <AntDesign name={'search1'} size={size.h4} color={colors.black} />
          </TouchableOpacity>
        )}
        {showNotifications && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.positionRelative}
            onPress={() => navigation.navigate('Notification')}>
            <MaterialCommunityIcons
              name={'bell'}
              size={size.h4}
              color={colors.black}
            />
            {/* <View style={style.notify}>
              <Text style={style.notifyText}>12</Text>
            </View> */}
          </TouchableOpacity>
        )}
        {!showSearch && !showNotifications && <Text>{'        '}</Text>}
      </View>
    </View>
  );
};

export default HeaderMain;

const style = StyleSheet.create({
  headerHeading: {
    fontSize: size.large,
    fontWeight: '500',
  },
  marginRight: {
    marginRight: WP('3%'),
  },
  notify: {
    backgroundColor: 'red',
    position: 'absolute',
    top: -4,
    left: -5,
    borderRadius: 50,
    width: WP('4.2%'),
    alignItems: 'center',
  },
  notifyText: {
    fontSize: size.tiny,
    color: colors.white,
  },
});

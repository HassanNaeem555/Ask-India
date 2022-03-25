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
        styles.padding2Percent,
        styles.paddingHorizontal2Percent,
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigateLeftIcon && navigateLeftIcon();
        }}>
        <Ionicons name={leftIcon} size={30} color={colors.black} />
      </TouchableOpacity>
      <Text style={style.headerHeading}>{headerText}</Text>
      <View style={[styles.directionRow, styles.justifySpaceBetween]}>
        {showSearch && (
          <TouchableOpacity
            style={style.marginRight}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Search')}>
            <AntDesign name={'search1'} size={30} color={colors.black} />
          </TouchableOpacity>
        )}
        {showNotifications && (
          <TouchableOpacity activeOpacity={0.9} style={styles.positionRelative}>
            <MaterialCommunityIcons
              name={'bell'}
              size={30}
              color={colors.black}
            />
            <View style={style.notify}>
              <Text style={style.notifyText}>1</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderMain;

const style = StyleSheet.create({
  headerHeading: {
    fontSize: size.xxlarge,
    fontWeight: 'bold',
  },
  marginRight: {
    marginRight: WP('3%'),
  },
  notify: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: -5,
    borderRadius: 50,
    width: WP('4.5%'),
    height: HP('2.8%'),
    alignItems: 'center',
  },
  notifyText: {
    marginTop: HP('0.2%'),
    fontSize: size.tiny,
    color: colors.white,
  },
});
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, HP, WP, size} from '../utilities';
import styles from '../screens/Auth/style';

const SocialButton = ({
  backgroundColor,
  iconName,
  iconText,
  navigate,
  screen_name,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigate(screen_name)}
      style={[
        styles.directionRow,
        style.buttonContainer,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={{flex: 1}}>
        <AntDesign name={iconName} size={23} color={colors.white} />
      </View>
      <View style={{flex: 6}}>
        <Text style={style.buttonText}>{iconText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const style = StyleSheet.create({
  buttonContainer: {
    width: WP('90%'),
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
    marginVertical: HP('0.7%'),
  },
  buttonText: {
    fontSize: size.large,
    fontWeight: '600',
    color: colors.white,
  },
});

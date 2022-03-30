import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, HP, WP, size} from '../utilities';
import styles from '../screens/Auth/style';

const SocialButton = ({
  backgroundColor,
  gradientColor,
  iconName,
  iconText,
  navigate,
  screen_name,
}) => {
  return (
    <LinearGradient
      colors={[gradientColor, backgroundColor]}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      style={[styles.margin1Percent, {borderRadius: 15}]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate(screen_name)}
        style={[styles.directionRow, style.buttonContainer]}>
        <View style={{flex: 1}}>
          <AntDesign name={iconName} size={20} color={colors.white} />
        </View>
        <View style={{flex: 6}}>
          <Text style={style.buttonText}>{iconText}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SocialButton;

const style = StyleSheet.create({
  buttonContainer: {
    width: WP('90%'),
    alignItems: 'center',
    paddingHorizontal: WP('5%'),
    paddingVertical: HP('1.5%'),
    marginVertical: HP('0.7%'),
  },
  buttonText: {
    fontSize: size.medium,
    color: colors.white,
  },
});

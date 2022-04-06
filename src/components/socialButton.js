import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, HP, WP, size} from '../utilities';
import styles from '../screens/Auth/style';

const SocialButton = ({
  backgroundColor,
  gradientColor,
  iconName,
  iconText,
  navigate,
  screen_name,
  iconType,
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
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}>
          {iconType ? (
            <AntDesign name={iconName} size={20} color={colors.white} />
          ) : (
            <FontAwesome name={iconName} size={20} color={colors.white} />
          )}
        </View>
        <View style={{flex: 5}}>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: HP('1.5%'),
    marginVertical: HP('0.7%'),
  },
  buttonText: {
    fontSize: size.normal,
    color: colors.white,
    fontWeight: '500',
  },
});

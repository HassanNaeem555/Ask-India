import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, HP, WP, size} from '../utilities';

const Button = ({buttonText, handlePress, width, rightMargin}) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 0}}
      style={[
        styles.margin1Percent,
        {borderRadius: 15, width: width, marginRight: rightMargin},
      ]}>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => {
          handlePress();
        }}
        activeOpacity={0.9}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    fontSize: size.small,
    fontWeight: 'bold',
    color: colors.white,
  },
});

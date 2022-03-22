import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Img from './Img';
import {colors, HP, WP, size} from '../utilities';

const Button = ({buttonText, handlePress, width, rightMargin}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {width: width, marginRight: rightMargin}]}
      onPress={() => {
        handlePress();
      }}
      activeOpacity={0.9}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: size.large,
    fontWeight: 'bold',
    color: colors.white,
  },
});

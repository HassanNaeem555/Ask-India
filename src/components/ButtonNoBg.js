import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, HP, WP, size} from '../utilities';

const ButtonNoBg = ({buttonText, handlePress, width, rightMargin}) => {
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

export default ButtonNoBg;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: size.medium,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

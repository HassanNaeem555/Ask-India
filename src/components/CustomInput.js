import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {colors, size, HP} from '../utilities';

const CustomInput = ({
  handlePress,
  change,
  placeholder,
  iconName,
  iconNameRight,
  iconType,
  leftIconShow,
  rightIconShow,
  secureTextEntry,
  error_message,
  rightIconColor,
  rightIconSize,
  defaultValue,
  label,
}) => {
  return (
    <Input
      label={label && label}
      labelStyle={{color: colors.black, marginVertical: HP('0.5%')}}
      placeholder={placeholder}
      leftIcon={
        leftIconShow && {
          type: iconType,
          name: iconName,
          color: colors.primary,
          size: size.xxlarge,
          onPress: () => {
            handlePress && handlePress();
          },
        }
      }
      rightIcon={
        rightIconShow && {
          type: iconType,
          name: iconNameRight,
          color: rightIconColor ? rightIconColor : colors.primary,
          size: rightIconSize ? rightIconSize : size.xxlarge,
          onPress: () => {
            handlePress && handlePress();
          },
        }
      }
      style={styles.inputStyles}
      inputContainerStyle={styles.inputContainer}
      secureTextEntry={secureTextEntry ? true : false}
      containerStyle={{
        padding: 0,
        margin: 0,
        height: HP('9%'),
      }}
      onChangeText={value => change(value)}
      errorStyle={styles?.error}
      errorMessage={error_message}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: colors.lightGray,
    borderRadius: 7,
  },
  inputStyles: {
    fontSize: size.xsmall,
  },
  error: {
    color: 'red',
  },
});

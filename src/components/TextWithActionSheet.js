import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import {colors, size, HP} from '../utilities';
import Icon from 'react-native-vector-icons/Fontisto';

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
  value,
  editable = true,
}) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        borderWidth: 1.5,
        borderColor: colors.lightGray,
        borderRadius: 7,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <Icon name={iconName} size={size.xxlarge} color={colors.primary} />
      <Text style={{marginLeft: 10}}>
        {value?.length ? value : placeholder}
      </Text>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: colors.white,
    backgroundColor: 'red',
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 7,
  },
  inputStyles: {
    fontSize: size.xsmall,

    width: 1,
  },
  error: {
    color: 'red',
  },
});

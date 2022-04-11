import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, size} from '../utilities';

const LoadingButton = ({width, rightMargin}) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 0}}
      style={[
        styles.margin1Percent,
        {borderRadius: 15, width: width, marginRight: rightMargin},
      ]}>
      <View style={[styles.buttonContainer]}>
        <ActivityIndicator
          size="small"
          color={colors.white}
          style={styles.buttonText}
        />
      </View>
    </LinearGradient>
  );
};

export default LoadingButton;

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

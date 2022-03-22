import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Img from './Img';
import {colors, HP, WP, size} from '../utilities';
import {appIcons} from '../assets';
const {width} = Dimensions.get('screen');

const Button = ({buttonText, handlePress}) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonText}</Text>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => {
          handlePress();
        }}
        activeOpacity={0.9}>
        <Img
          local={true}
          resizeMode={'contain'}
          style={styles.proceedButton}
          src={appIcons.elipse}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    width: WP('90%'),
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    fontSize: size.large,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonView: {
    position: 'absolute',
    left: WP('5%'),
    top: HP('-5%'),
  },
  proceedButton: {
    width: WP('25%'),
    height: HP('11%'),
  },
});

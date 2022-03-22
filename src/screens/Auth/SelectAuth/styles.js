import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: WP('100%'),
    height: HP('30%'),
  },
  loginText: {
    fontSize: size.normal,
    color: colors.gray,
  },
  loginText1: {
    fontSize: size.small,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default style;

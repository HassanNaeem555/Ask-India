import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: WP('100%'),
    height: HP('30%'),
  },
  heading: {
    fontSize: size.medium,
    fontWeight: '500',
  },
});

export default style;

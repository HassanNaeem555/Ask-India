import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: '100%',
    height: HP('20%'),
    marginBottom: HP('1%'),
  },
  forgotText: {
    fontSize: size.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default style;

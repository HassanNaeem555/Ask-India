import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  mainHeading: {
    color: colors.primary,
    fontSize: size.xxlarge,
    fontWeight: '500',
  },
  heading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
  },
  subHeading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
    marginTop: 10,
  },
  normalText: {
    fontSize: size.small,
    marginVertical: HP('0.5%'),
    marginRight: WP('0.6%'),
  },
});

export default style;

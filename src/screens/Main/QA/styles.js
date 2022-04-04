import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    fontSize: size.normal,
    fontWeight: '400',
  },
  subHeading: {
    fontSize: size.medium,
  },
  normalText: {
    fontSize: size.xsmall,
    marginVertical: HP('0.5%'),
    marginRight: WP('0.6%'),
  },
});

export default style;

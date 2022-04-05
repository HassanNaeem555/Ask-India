import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  Logo: {
    width: width,
    height: HP('34%'),
  },
  heading: {
    fontSize: size.h5,
  },
  subHeading: {
    fontSize: size.xsmall,
  },
  normalText: {
    fontSize: size.small,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  image: {
    width: WP('3%'),
    height: HP('2%'),
    marginRight: WP('2%'),
  },
});

export default style;

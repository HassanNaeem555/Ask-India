import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  Logo: {
    width: width,
    height: HP('34%'),
    borderRadius: 10,
  },
  heading: {
    fontSize: size.h6,
  },
  subHeading: {
    fontSize: size.xsmall,
  },
  normalText: {
    fontSize: size.small,
    textTransform: 'capitalize',
    fontWeight: '400',
  },
  image: {
    width: WP('3%'),
    height: HP('2%'),
    marginRight: WP('2%'),
    marginTop: HP('0.1%'),
  },
});

export default style;

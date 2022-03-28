import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
  },
  notificationText: {
    color: colors.black,
    fontSize: size.small,
    fontWeight: 'bold',
    lineHeight: 21,
  },
  dateTime: {
    fontSize: size.xxsmall,
    fontWeight: '400',
  },
});

export default style;

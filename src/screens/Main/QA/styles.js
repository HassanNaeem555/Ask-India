import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
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
    fontSize: size.xsmall,
    marginVertical: HP('0.5%'),
    marginRight: WP('0.6%'),
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal: WP('4%'),
    paddingVertical: HP('1%'),
  },
  buttonText: {
    fontSize: size.tiny,
    fontWeight: '500',
    color: colors.white,
  },
});

export default style;

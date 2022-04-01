import {Dimensions, StyleSheet, Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors, HP, WP, size, family} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: WP('100%'),
    height: HP('20%'),
    marginBottom: HP('20%'),
  },
  logo: {
    width: WP('24%'),
    height: HP('22%'),
    zIndex: 10,
    top: -15,
  },
  heading: {
    fontSize: size.h6,
    color: colors.white,
    fontWeight: 'bold',
    top: 15,
  },
  subHeading: {
    fontSize: size.small,
    color: colors.gray,
  },
});

export default style;

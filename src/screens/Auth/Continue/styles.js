import {Dimensions, StyleSheet, Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors, HP, WP, size, family} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: WP('100%'),
    height: HP('20%'),
    marginBottom: HP('20%'),
  },
  heading: {
    fontSize: size.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: size.small,
    color: colors.gray,
  },
});

export default style;

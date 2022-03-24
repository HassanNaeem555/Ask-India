import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: '100%',
    height: HP('20%'),
    marginBottom: HP('1%'),
  },
  headingText: {
    fontSize: size.xlarge,
    color: colors.black,
    fontWeight: 'bold',
  },
  subHeadingText: {
    fontSize: size.normal,
    color: colors.black,
    fontWeight: 'bold',
  },
  selectionText: {
    fontSize: size.xsmall,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: size.xxsmall,
  },
});

export default style;

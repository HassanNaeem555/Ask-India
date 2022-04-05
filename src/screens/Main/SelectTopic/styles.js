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
  image: {
    width: WP('9%'),
    height: HP('5.2%'),
  },
  customSelectionBox: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  selectionBoxText: {
    fontSize: size.medium,
    fontWeight: '500',
  },
  customSelectionCircle: {
    backgroundColor: colors.white,
    width: WP('5%'),
    height: HP('2.5%'),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  customSelectionCircleActive: {
    backgroundColor: colors.primary,
  },
});

export default style;

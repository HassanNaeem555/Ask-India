import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size} from '../../../utilities';

const style = StyleSheet.create({
  Logo: {
    width: WP('70%'),
    height: HP('20%'),
    marginLeft: -25,
  },
  subHeading: {
    fontSize: size.normal,
    fontWeight: 'bold',
  },
  customSelectionBox: {
    borderWidth: 1,
    borderRadius: 10,
  },
  selectionBoxText: {
    fontSize: size.small,
    fontWeight: '400',
  },
  customSelectionCircle: {
    backgroundColor: colors.white,
    width: WP('6%'),
    height: HP('2.9%'),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  customSelectionCircleActive: {
    backgroundColor: colors.primary,
  },
});

export default style;

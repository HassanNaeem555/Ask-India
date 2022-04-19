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
    backgroundColor: colors.white,
  },
  selectionBoxText: {
    fontSize: size.small,
    fontWeight: '400',
  },
  selectedImage: {
    width: WP('4.5%'),
    height: HP('4.5%'),
  },
});

export default style;

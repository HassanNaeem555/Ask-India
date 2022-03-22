import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: WP('100%'),
    height: HP('30%'),
    marginVertical: HP('2%'),
  },
  forgotText: {
    fontSize: size.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  countryPickerContainer: {
    height: HP('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: colors.primary,
  },
  inputLeftPanel: {flex: 2},
  inputRightPanel: {flex: 8},
});

export default style;

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
    // height: HP('6.5%'),
    paddingVertical: HP('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: colors.primary,
  },
  inputLeftPanel: {flex: 2},
  inputRightPanel: {flex: 8},
  codeFieldRoot: {marginTop: 5},
  cell: {
    width: WP('12%'),
    height: HP('8%'),
    marginVertical: HP('2%'),
    lineHeight: 40,
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00000030',
    textAlign: 'center',
    marginRight: 10,
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default style;

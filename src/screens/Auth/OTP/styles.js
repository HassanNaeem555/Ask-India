import {Dimensions, StyleSheet, Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors, HP, WP, size, family} from '../../../utilities';

const style = StyleSheet.create({
  splashLogo: {
    width: '100%',
    height: HP('20%'),
    marginBottom: HP('3%'),
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

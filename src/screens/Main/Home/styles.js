import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: WP('30%'),
    height: HP('20%'),
  },
  loginHeading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
  },
  loginSubHeading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: size.normal,
    color: colors.white,
    marginTop: HP('4%'),
    marginBottom: HP('1%'),
  },
  loginLockBtn: {
    width: WP('10%'),
    height: HP('5%'),
  },
  loginText1: {
    fontSize: size.xxlarge,
    color: colors.white,
  },
  passTxtStyle: {
    left: 5,
    color: colors.white,
    fontSize: size.small,
  },
  passRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default style;

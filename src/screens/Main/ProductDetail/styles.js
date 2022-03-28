import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  Logo: {
    width: width,
    height: HP('42%'),
  },
  heading: {
    fontSize: size.h5,
  },
  subHeading: {
    fontSize: size.xsmall,
    marginTop: 5,
  },
  normalText: {
    fontSize: size.xsmall,
    marginVertical: HP('0.5%'),
    marginRight: WP('0.6%'),
  },
  chevoronBg: {
    backgroundColor: colors.primary,
    paddingVertical: HP('0.3%'),
    paddingHorizontal: WP('0.9%'),
  },
  socialButton: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
    paddingHorizontal: WP('3.7%'),
    paddingVertical: HP('2%'),
    marginRight: WP('1.2%'),
  },
});

export default style;

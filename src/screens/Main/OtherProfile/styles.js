import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    fontSize: size.h6,
  },
  email: {
    fontSize: size.medium,
  },
  subHeading: {
    fontSize: size.small,
    textAlign: 'center',
  },
  normalText: {
    fontSize: size.h5,
  },
  smallText: {
    fontSize: size.normal,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: colors.gray,
  },
  categoryButton: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.lightGray,
  },
  catgoryTitle: {
    fontSize: size.tiny,
    color: colors.gray,
  },
  activeCatgoryTitle: {
    color: colors.white,
  },
  profileImage: {
    width: WP('38%'),
    height: HP('20%'),
    borderRadius: 1000,
    borderWidth: 5,
    borderColor: colors.primary,
  },
});

export default style;

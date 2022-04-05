import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
  },
  subHeading: {
    color: colors.white,
    fontSize: size.small,
  },
  normalText: {
    fontSize: size.normal,
    marginRight: WP('0.6%'),
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
});

export default style;

import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
  },
  when: {
    color: '#1E1E1E',
    fontSize: size.normal,
    marginVertical: HP('1.5%'),
    fontWeight: '500',
  },
});

export default style;

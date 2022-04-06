import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    fontSize: size.h1,
    fontWeight: 'bold',
    color: '#484848',
  },
  subHeading: {
    fontSize: size.xxlarge,
    fontWeight: '700',
  },
  normalText: {
    fontSize: size.xsmall,
    marginVertical: HP('0.5%'),
    marginRight: WP('0.6%'),
  },
  questions: {
    fontSize: size.xxlarge,
    fontWeight: 'bold',
  },
  image: {
    width: WP('5%'),
    height: HP('3%'),
  },
  quizResult: {
    width: WP('100%'),
    height: HP('22%'),
  },
  customSelectionBox: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  selectionBoxText: {
    fontSize: size.normal,
    color: colors.gray,
    fontWeight: '400',
  },
  customSelectionCircle: {
    backgroundColor: colors.white,
    width: WP('5%'),
    height: HP('2.5%'),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  customSelectionCircleActive: {
    backgroundColor: colors.primary,
  },
  congratulations: {
    fontSize: size.h3,
    color: colors.red,
    fontWeight: 'bold',
  },
  details: {
    fontSize: size.medium,
    color: colors.gray,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default style;

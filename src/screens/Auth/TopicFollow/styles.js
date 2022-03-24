import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size} from '../../../utilities';

const style = StyleSheet.create({
  firstSection: {
    flex: 1,
  },
  secondSection: {
    flex: 2,
  },
  thirdSection: {
    flex: 5,
  },
  fourthSection: {
    flex: 1,
  },
  heading: {
    fontSize: size.large,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: size.normal,
    fontWeight: 'bold',
  },
  selectionButton: {
    backgroundColor: colors.white,
    paddingVertical: HP('1%'),
    paddingHorizontal: WP('4%'),
    borderWidth: 1,
    borderColor: colors.gray,
    marginRight: WP('1.5%'),
  },
  selectionButtonText: {
    fontSize: size.xxsmall,
  },
  selectedButton: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  selectionTopic: {
    flex: 0.5,
    backgroundColor: colors.white,
    elevation: 5,
    borderWidth: 1,
    marginRight: WP('1.5%'),
  },
  selectedTopic: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
});

export default style;

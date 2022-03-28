import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    fontSize: size.large,
    fontWeight: '400',
  },
  subHeading: {
    fontSize: size.medium,
  },
  normalText: {
    fontSize: size.xsmall,
    marginVertical: HP('0.5%'),
    marginRight: WP('0.6%'),
  },
  searchBar: {
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
        elevation: 7,
      },
    }),
    borderWidth: 0.3,
    borderColor: colors.lightGray,
    paddingVertical: HP('2%'),
    paddingHorizontal: WP('5%'),
    marginHorizontal: WP('4.5%'),
    marginVertical: WP('1.5%'),
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
  selectionButton: {
    backgroundColor: colors.white,
    paddingVertical: HP('0.8%'),
    paddingHorizontal: WP('3%'),
    borderWidth: 1,
    borderColor: colors.gray,
    marginRight: WP('1.5%'),
  },
  selectionButtonText: {
    fontSize: size.tiny,
  },
});

export default style;

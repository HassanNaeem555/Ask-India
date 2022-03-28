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
    fontSize: size.xxlarge,
    textAlign: 'center',
    marginTop: 10,
  },
  filterSelection: {
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
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingVertical: HP('0.8%'),
    paddingHorizontal: WP('0.9%'),
  },
  filterText: {
    fontSize: size.xsmall,
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
    paddingVertical: HP('1.3%'),
    paddingHorizontal: WP('5%'),
    marginHorizontal: WP('4.5%'),
    marginVertical: WP('1.5%'),
  },
});

export default style;

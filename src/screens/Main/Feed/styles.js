import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  mainHeading: {
    color: colors.primary,
    fontSize: size.xxlarge,
    fontWeight: '500',
  },
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
    fontSize: size.small,
  },
  normalText: {
    fontSize: size.small,
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
    borderRadius: 10,
    paddingVertical: HP('1.8%'),
    paddingHorizontal: WP('5%'),
    marginHorizontal: WP('2.5%'),
    marginVertical: WP('1.7%'),
  },
});

export default style;

import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../../utilities';

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
  categoryButton: {
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
    paddingVertical: HP('1%'),
    paddingHorizontal: WP('8%'),
    borderWidth: 1.2,
    borderColor: colors.lightGray,
    marginRight: WP('1.8%'),
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  catgoryTitle: {
    fontSize: size.small,
  },
  activeCatgoryTitle: {
    color: colors.white,
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
});

export default style;

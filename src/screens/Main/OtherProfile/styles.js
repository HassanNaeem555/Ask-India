import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    fontSize: size.xxlarge,
  },
  subHeading: {
    fontSize: size.small,
    marginTop: HP('0.1%'),
  },
  normalText: {
    fontSize: size.xsmall,
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
    paddingHorizontal: WP('6.5%'),
    borderWidth: 1.2,
    borderColor: colors.lightGray,
    marginRight: WP('1.8%'),
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  catgoryTitle: {
    fontSize: size.tiny,
  },
  activeCatgoryTitle: {
    color: colors.white,
  },
  postImage: {
    marginLeft: WP('1.5%'),
    width: WP('18%'),
    height: HP('11%'),
  },
  followButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: WP('7%'),
    paddingVertical: HP('0.8%'),
    marginRight: WP('1.5%'),
  },
  messageButton: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    paddingHorizontal: WP('7%'),
    paddingVertical: HP('0.8%'),
    paddingHorizontal: WP('4%'),
  },
});

export default style;

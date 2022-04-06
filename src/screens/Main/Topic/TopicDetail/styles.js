import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../../utilities';

const style = StyleSheet.create({
  normalText: {
    fontSize: size.medium,
    color: '#7b7b7b',
    lineHeight: 25,
  },
  postImageDivision: {
    flex: 1,
  },
  postContentDivision: {
    flex: 6,
  },
  postIconDivision: {
    flex: 2,
  },
  postImage: {
    marginLeft: WP('1.5%'),
    width: WP('10%'),
    height: HP('6%'),
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 50,
  },
  galleryImage: {
    width: WP('15%'),
    height: HP('8%'),
  },
  icon: {
    width: WP('8%'),
    height: HP('4%'),
    position: 'absolute',
    top: -10,
    right: -10,
  },
  iconAdd: {
    width: WP('8%'),
    height: HP('4%'),
    position: 'absolute',
    top: HP('2%'),
    right: HP('1.5%'),
  },
  postHeading: {
    fontSize: size.medium,
    color: colors.mediumGray,
    fontWeight: 'bold',
  },
  postDate: {
    fontSize: size.xxsmall,
    color: '#ABAFB2',
  },
  textUnderBtn: {
    fontSize: size.xxsmall,
    color: colors.white,
  },
  followButton: {
    paddingHorizontal: WP('3%'),
    paddingVertical: HP('0.7%'),
  },
});

export default style;

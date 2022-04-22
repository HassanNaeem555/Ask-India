import { Dimensions, StyleSheet, Platform } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utilities';

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
    flex: 5,
  },
  postIconDivision: {
    flex: 3,
  },
  postImageBorder: {
    width: WP('11%'),
    height: HP('6%'),
    overflow: 'hidden',
    zIndex: 10,
  },
  postImage: {
    width: 45,
    height: 45,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  galleryImage: {
    width: WP('16%'),
    height: HP('7%'),
    borderRadius: 20,
  },
  addGalleryImage: {
    width: WP('14%'),
    height: HP('7%'),
  },
  icon: {
    width: WP('8%'),
    height: HP('4%'),
    position: 'absolute',
    top: -2,
    right: -10,
  },
  iconAdd: {
    width: WP('7%'),
    height: HP('3%'),
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

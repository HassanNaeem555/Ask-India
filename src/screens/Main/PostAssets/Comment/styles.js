import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../../utilities';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  heading: {
    color: colors.white,
    fontSize: size.xxlarge,
    textAlign: 'center',
  },
  postHeading: {
    fontSize: size.medium,
    color: colors.mediumGray,
    fontWeight: 'bold',
  },
  postImageBorder: {
    width: WP('11%'),
    height: HP('6.1%'),
    overflow: 'hidden',
    zIndex: 10,
  },
  postImage: {
    width: WP('9%'),
    height: HP('6%'),
    borderRadius: 50,
    position: 'absolute',
  },
  sendMessage: {
    width: WP('8%'),
    height: HP('5%'),
  },
  sendCamera: {
    width: WP('7%'),
    height: HP('5%'),
  },
  otherUserName: {
    fontSize: size.large,
    fontWeight: 'bold',
  },
  otherUserMessage: {
    color: '#7B7B7B',
    fontSize: size.small,
    fontWeight: '400',
  },
  ourUserMessage: {
    color: colors.white,
    fontSize: size.small,
    fontWeight: '400',
  },
  blockOfMessage: {
    backgroundColor: '#00A1EF',
    borderRadius: 15,
    borderBottomRightRadius: 20,
  },
  chatuser: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  seperator: {
    borderWidth: 0.5,
    borderColor: colors.gray,
  },
});

export default style;

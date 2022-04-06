import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../../utilities';

const style = StyleSheet.create({
  normalText: {
    fontSize: size.medium,
    color: '#7b7b7b',
    lineHeight: 25,
  },
  userImage: {
    marginLeft: WP('1.5%'),
    width: WP('10%'),
    height: HP('6%'),
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 50,
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
});

export default style;

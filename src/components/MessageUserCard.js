import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import Image from './Img';
import {appImages} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const MessageUserCard = ({navigation}) => {
  return (
    <Card
      containerStyle={{
        marginLeft: WP('1.2%'),
        marginRight: WP('1.2%'),
        paddingVertical: HP('1.7%'),
        borderWidth: 0,
        borderRadius: 10,
        marginTop: HP('1.5%'),
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('MessagesOfUsers', {
            id: 0,
            name: 'Walter Alexander',
          });
        }}
        style={[styles.directionRow, styles.justifyCenter]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[style.postImageDivision, styles.alignCenter]}
          onPress={() => {
            navigation.navigate('MessagesOfUsers', {
              id: 0,
              name: 'Walter Alexander',
            });
          }}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.postImage}
            src={appImages?.postImage}
          />
        </TouchableOpacity>
        <View
          style={[
            style.postContentDivision,
            styles.paddingHorizontal4Percent,
            styles.marginHalfPercent,
            {marginLeft: WP('0.5%')},
          ]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('MessagesOfUsers', {
                id: 0,
                name: 'Walter Alexander',
              });
            }}>
            <Text style={style.postHeading} numberOfLines={1}>
              Mark Smith
            </Text>
          </TouchableOpacity>
          <Text style={style.postDate} numberOfLines={2}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed
          </Text>
        </View>
        <View style={[styles.alignCenter, style.postIconDivision]}>
          <Text style={style.postDate} numberOfLines={1}>
            12-Jan-2022
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default MessageUserCard;

const style = StyleSheet.create({
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
    width: WP('12%'),
    height: HP('6%'),
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 50,
  },
  which: {
    width: WP('5%'),
    height: HP('5%'),
    position: 'absolute',
    bottom: -8,
    right: -5,
  },
  postBanner: {
    width: WP('89%'),
    height: HP('30%'),
    marginVertical: HP('1.5%'),
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
  postDescription: {
    fontSize: size.tiny,
    color: colors.mediumGray,
    lineHeight: 15,
  },
  innerSelectionText: {
    fontSize: size.xxsmall,
    fontWeight: '500',
    color: colors.black,
  },
  tags: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: HP('1.7%'),
    right: WP('10%'),
    paddingHorizontal: WP('4.5%'),
    paddingVertical: HP('0.6%'),
    zIndex: 3,
  },
  tagText: {
    fontSize: size.xsmall,
    fontWeight: '400',
    color: colors.white,
  },
  seperator: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
  },
});

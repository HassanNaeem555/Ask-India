import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import Image from './Img';
import {appImages, appIcons} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const PeoplesCard = ({navigation, what, text}) => {
  return (
    <Card
      containerStyle={[
        styles.marginHorizontal1Percent,
        {
          paddingVertical: HP('1.7%'),
          borderWidth: 0,
          borderRadius: 10,
          marginTop: HP('1.5%'),
        },
      ]}>
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
          {text && (
            <Text style={style.postDate} numberOfLines={1}>
              {what}
            </Text>
          )}
        </View>
        <View style={[styles.alignCenter, style.postIconDivision]}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              local={true}
              resizeMode={'contain'}
              style={style.what}
              src={
                what == ''
                  ? appIcons?.addFriend
                  : what == 'Friend'
                  ? appIcons?.message
                  : what == 'Request Pending'
                  ? appIcons?.requestPending
                  : null
              }
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default PeoplesCard;

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
    width: WP('10%'),
    height: HP('6%'),
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 50,
  },
  what: {
    width: WP('8%'),
    height: HP('5%'),
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
  seperator: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
  },
});

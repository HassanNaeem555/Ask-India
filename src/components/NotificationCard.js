import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import Image from './Img';
import {appImages, appIcons} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const NotificationCard = ({navigation, which, what}) => {
  return (
    <Card
      containerStyle={[
        {
          marginHorizontal: 0,
          paddingVertical: HP('1.7%'),
          borderWidth: 1,
          borderRadius: 10,
          marginTop: HP('1.5%'),
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.directionRow, styles.justifyCenter]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            style.postImageDivision,
            styles.alignCenter,
            styles.positionRelative,
            {marginTop: -10},
          ]}
          onPress={() => {
            navigation.navigate('OtherProfile', {
              id: 0,
              is_following: 3,
            });
          }}>
          {/* <Image
            local={true}
            resizeMode={'contain'}
            style={style.postImage}
            src={appImages?.postImage}
          /> */}
          <Image
            local={true}
            resizeMode={'contain'}
            style={[style.postImageBorder, styles.positionRelative]}
            src={appImages?.postImageBorder}
          />
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.postImage}
            src={appImages?.postImageRounded}
          />
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.which}
            src={
              which == 'like'
                ? appIcons?.like
                : which == 'comment'
                ? appIcons?.comment
                : which == 'share'
                ? appIcons?.share
                : appIcons?.like
            }
          />
        </TouchableOpacity>
        <View
          style={[style.postContentDivision, styles.paddingHorizontal4Percent]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('OtherProfile', {
                id: 0,
                is_following: 3,
              });
            }}>
            <Text style={style.postHeading} numberOfLines={1}>
              Mark Smith
            </Text>
          </TouchableOpacity>
          <Text style={style.postDate} numberOfLines={1}>
            {what}
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

export default NotificationCard;

const style = StyleSheet.create({
  postImageDivision: {
    flex: 1,
  },
  postContentDivision: {
    flex: 5.5,
  },
  postIconDivision: {
    flex: 2.5,
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
    fontSize: size.normal,
    color: colors.mediumGray,
    letterSpacing: 1,
    fontWeight: '500',
  },
  postDate: {
    fontSize: size.tiny,
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

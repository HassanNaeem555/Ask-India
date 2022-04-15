import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import Image from './Img';
import {image_url} from '../utils/url';
import {appImages, appIcons} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const PeoplesCard = ({
  index,
  navigation,
  user_id,
  user_name,
  user_image,
  is_following,
  createFollowUnFollow,
}) => {
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
          navigation('OtherProfile', {
            id: user_id,
          });
        }}
        style={[styles.directionRow, styles.justifyCenter]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[style.postImageDivision, styles.alignCenter, {marginTop: -5}]}
          onPress={() => {
            navigation('OtherProfile', {
              id: user_id,
            });
          }}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={[style.postImageBorder, styles.positionRelative]}
            src={appImages?.postImageBorder}
          />
          <Image
            local={false}
            resizeMode={'cover'}
            style={style.postImage}
            src={`${image_url}${user_image}`}
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
              navigation('OtherProfile', {
                id: user_id,
              });
            }}>
            <Text style={style.postHeading} numberOfLines={1}>
              {user_name}
            </Text>
          </TouchableOpacity>
          {/* {text && (
            <Text style={style.postDate} numberOfLines={1}>
              {what}
            </Text>
          )} */}
        </View>
        <View style={[styles.alignCenter, style.postIconDivision]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              createFollowUnFollow &&
                createFollowUnFollow(
                  {
                    user_id,
                    user_name,
                    user_image,
                    is_following,
                  },
                  index,
                );
            }}>
            <Image
              local={true}
              resizeMode={'contain'}
              style={style.what}
              src={
                is_following == 0
                  ? appIcons?.addFriend
                  : is_following == 1
                  ? appIcons?.requestPending
                  : null
                // : what == 'Request Pending'
                // ? appIcons?.requestPending
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
  postImageBorder: {
    width: WP('12%'),
    height: HP('6.3%'),
    overflow: 'hidden',
    zIndex: 10,
  },
  postImage: {
    width: WP('11%'),
    height: HP('6.1%'),
    borderRadius: 1000,
    position: 'absolute',
  },
  what: {
    width: WP('7%'),
    height: HP('4.5%'),
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

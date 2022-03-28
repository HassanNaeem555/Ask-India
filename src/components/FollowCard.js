import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Image from './Img';
import {WP, HP, colors, size} from '../utilities';
import {appImages} from '../assets';
import styles from '../screens/Main/style';

const FollowCard = ({showFollowButton}) => {
  return (
    <Card containerStyle={{marginHorizontal: 0, paddingVertical: HP('1.2%')}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.postImage}
            src={appImages?.postImage}
          />
        </View>
        <View
          style={[
            styles.justifyCenter,
            {flex: showFollowButton ? 6 : 8, marginLeft: WP('2%')},
          ]}>
          <Text style={style.heading} numberOfLines={2}>
            Mini Drone
          </Text>
        </View>
        {showFollowButton && (
          <View style={[styles.justifyCenter, styles.alignCenter, {flex: 2}]}>
            <TouchableOpacity activeOpacity={0.9} style={style.button}>
              <Text style={[style.subHeading, styles.colorWhite]}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Card>
  );
};

export default FollowCard;

const style = StyleSheet.create({
  postImage: {
    width: WP('17%'),
    height: HP('11%'),
  },
  heading: {
    fontSize: size.normal,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: size.xxsmall,
    fontWeight: '500',
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: WP('2%'),
    paddingVertical: HP('1%'),
  },
});

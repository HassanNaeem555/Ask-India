import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Image from './Img';
import {appImages, appLogos} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const LikeCard = ({followed, navigation}) => {
  return (
    <Card
      style={styles.positionRelative}
      containerStyle={[
        styles.paddingHorizontal1Percent,
        {overflow: 'hidden', borderRadius: 10},
      ]}>
      <View style={[styles.directionRow, styles.paddingHorizontal2Percent]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            style.likeImageDivision,
            styles.alignCenter,
            styles.positionRelative,
          ]}
          onPress={() => {
            navigation.navigate('OtherProfile');
          }}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.likeImage}
            src={appImages?.postImage}
          />
          <AntDesign
            name={'like1'}
            size={25}
            color={colors.primary}
            style={style.likeIcon}
          />
        </TouchableOpacity>
        <View
          style={[
            style.likeContentDivision,
            styles.paddingHorizontal4Percent,
            styles.justifyCenter,
          ]}>
          <Text
            style={style.likeHeading}
            numberOfLines={2}
            onPress={() => {
              navigation.navigate('OtherProfile');
            }}>
            Sam Wilson
          </Text>
        </View>
        <View style={[style.likeIconDivision, styles.justifyCenter]}>
          {followed ? (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[style.followButton, style.btnFollowed]}>
              <Text style={style.textUnderBtnFollowed}>Un Follow</Text>
            </TouchableOpacity>
          ) : (
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              start={{x: 1, y: 1}}
              end={{x: 1, y: 0}}
              style={[
                styles.margin1Percent,
                style.followButton,
                styles.justifyCenter,
                styles.alignCenter,
                {borderRadius: 10},
              ]}>
              <TouchableOpacity activeOpacity={0.9}>
                <Text style={style.textUnderBtn}>Follow</Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        </View>
      </View>
    </Card>
  );
};

export default LikeCard;

const style = StyleSheet.create({
  likeImageDivision: {
    flex: 1.6,
  },
  likeContentDivision: {
    flex: 6,
  },
  likeIconDivision: {
    flex: 2.4,
  },
  likeImage: {
    marginLeft: WP('1.5%'),
    width: WP('13%'),
    height: HP('8%'),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  likeIcon: {
    position: 'absolute',
    bottom: HP('-0.%'),
    right: WP('-2.9%'),
  },
  likeHeading: {
    fontSize: size.large,
    fontWeight: 'bold',
  },
  followButton: {
    paddingHorizontal: WP('1.5%'),
    paddingVertical: HP('0.7%'),
  },
  btnFollowed: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
  },
  textUnderBtn: {
    fontSize: size.xxsmall,
    color: colors.white,
  },
  textUnderBtnFollowed: {
    fontSize: size.xxsmall,
    color: colors.gray,
  },
});

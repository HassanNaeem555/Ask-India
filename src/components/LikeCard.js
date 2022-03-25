import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Image from './Img';
import {appImages, appLogos} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const LikeCard = () => {
  return (
    <Card
      style={styles.positionRelative}
      containerStyle={[styles.paddingHorizontal1Percent, {overflow: 'hidden'}]}>
      <View style={[styles.directionRow, styles.paddingHorizontal2Percent]}>
        <View
          style={[
            style.likeImageDivision,
            styles.alignCenter,
            styles.positionRelative,
          ]}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.likeImage}
            src={appImages?.postImage}
          />
          <AntDesign
            name={'heart'}
            size={25}
            color={colors.primary}
            style={style.likeIcon}
          />
        </View>
        <View
          style={[
            style.likeContentDivision,
            styles.paddingHorizontal4Percent,
            styles.justifyCenter,
          ]}>
          <Text style={style.likeHeading} numberOfLines={2}>
            Sam Wilson
          </Text>
        </View>
        <View style={[style.likeIconDivision, styles.justifyCenter]}>
          <TouchableOpacity activeOpacity={0.9} style={style.followButton}>
            <Text style={style.textUnderBtn}>Follow</Text>
          </TouchableOpacity>
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
    width: WP('15%'),
    height: HP('8%'),
  },
  likeIcon: {
    position: 'absolute',
    bottom: HP('-1%'),
    right: WP('-2.9%'),
  },
  likeHeading: {
    fontSize: size.large,
    fontWeight: 'bold',
  },
  followButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: WP('3.5%'),
    paddingVertical: HP('0.7%'),
  },
  textUnderBtn: {
    fontSize: size.xsmall,
    color: colors.white,
  },
});

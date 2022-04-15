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
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Image from './Img';
import {appImages, appLogos, appIcons} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const Post = ({showPostImage, showTag, navigation}) => {
  return (
    <Card
      style={styles.positionRelative}
      containerStyle={[
        styles.margin2Percent,
        styles.marginHorizontal1Percent,
        {
          overflow: 'hidden',
          borderRadius: 25,
          borderWidth: 0,
        },
      ]}>
      <View
        style={[
          styles.directionRow,
          styles.justifyCenter,
          styles.positionRelative,
        ]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            style.postImageDivision,
            styles.alignCenter,
            styles.positionRelative,
            {marginTop: -5},
          ]}
          onPress={() => {
            navigation.navigate('OtherProfile', {
              id: 0,
            });
          }}>
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
            style={style.online}
            src={appIcons?.online}
          />
        </TouchableOpacity>
        <View
          style={[style.postContentDivision, styles.paddingHorizontal4Percent]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('OtherProfile', {
                id: 0,
              });
            }}>
            <Text style={style.postHeading}>Mark Smith</Text>
          </TouchableOpacity>
          <Text style={style.postDate}>12-Jan-2022</Text>
        </View>
        <View style={[styles.alignCenter, style.postIconDivision]}>
          <Entypo
            name={'info-with-circle'}
            size={size.h6}
            color={colors.gray}
          />
        </View>
      </View>
      {showPostImage ? (
        <View style={{flex: 1}}>
          <Text style={[style.postDescription, styles.margin1Percent]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Text>
          <ImageBackground
            source={appLogos?.logos}
            resizeMode={'cover'}
            style={style.postBanner}
            imageStyle={{borderRadius: 20}}
          />
        </View>
      ) : (
        <View style={[styles.directionRow, styles.margin2Percent]}>
          <View style={[style.postSpaceDivision]}>
            <Text style={style.postDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Text>
          </View>
        </View>
      )}
      <View
        style={[
          styles.directionRow,
          styles.justifySpaceBetween,
          styles.marginVerticle1HalfPercent,
        ]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.directionRow]}
          onPress={() => navigation.navigate('Like', {id: 1})}>
          <AntDesign
            name={'like1'}
            size={size.xxlarge}
            color={colors.primary}
            style={{marginRight: WP('2%')}}
          />
          <Text style={style.innerSelectionText}>622 Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.directionRow]}
          onPress={() => navigation.navigate('Comment', {id: 1})}>
          <Text style={style.innerSelectionText}>5,622 Comments</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.marginHalfPercent, style.seperator]} />
      <View
        style={[
          styles.directionRow,
          styles.justifySpaceBetween,
          styles.paddingHorizontal2Percent,
          styles.margin2Percent,
        ]}>
        <View style={[styles.directionRow]}>
          <TouchableOpacity activeOpacity={0.9}>
            <AntDesign
              name={'like1'}
              size={20}
              color={colors.primary}
              style={{marginRight: WP('2%')}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Like', {id: 1})}>
            <Text style={style.innerSelectionText}>92 likes</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.directionRow]}>
          <TouchableOpacity activeOpacity={0.9}>
            <EvilIcons
              name={'comment'}
              size={size.h1}
              color={colors.gray}
              style={{marginRight: WP('2%'), marginTop: HP('-0.5%')}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Comment', {id: 1})}>
            <Text style={style.innerSelectionText}>92 comments</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.directionRow]}>
          <TouchableOpacity activeOpacity={0.9}>
            <Fontisto
              name={'share-a'}
              size={20}
              color={colors.gray}
              style={{marginRight: WP('2%')}}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Text style={style.innerSelectionText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default Post;

const style = StyleSheet.create({
  postImageDivision: {
    flex: 1.5,
  },
  postContentDivision: {
    flex: 6.5,
  },
  postSpaceDivision: {
    flex: 1,
  },
  postIconDivision: {
    flex: 1,
  },
  postImageBorder: {
    width: WP('11%'),
    height: HP('6%'),
    overflow: 'hidden',
    zIndex: 10,
  },
  postImage: {
    width: WP('9%'),
    height: HP('6%'),
    borderRadius: 50,
    position: 'absolute',
  },
  online: {
    width: WP('3%'),
    height: HP('3%'),
    position: 'absolute',
    bottom: -5,
    right: 5,
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
    color: colors.gray,
  },
  postDescription: {
    fontSize: size.xsmall,
    color: colors.mediumGray,
    lineHeight: 20,
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

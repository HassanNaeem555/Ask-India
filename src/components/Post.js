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

const Post = ({showPostImage, showTag, navigation}) => {
  return (
    <View style={styles.positionRelative}>
      {showTag && (
        <View style={style.tags}>
          <Text style={style.tagText}>Student</Text>
        </View>
      )}
      <Card
        style={styles.positionRelative}
        containerStyle={[
          styles.paddingHorizontal1Percent,
          styles.margin4Percent,
          {overflow: 'hidden', marginHorizontal: 0},
        ]}>
        <View
          style={[
            styles.directionRow,
            styles.justifyCenter,
            styles.positionRelative,
          ]}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[style.postImageDivision, styles.alignCenter]}
            onPress={() => {
              navigation.navigate('OtherProfile');
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
              styles.margin1Percent,
            ]}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('OtherProfile');
              }}>
              <Text style={style.postHeading}>Mark Smith</Text>
            </TouchableOpacity>
            <Text style={style.postDate}>Mark Smith</Text>
          </View>
          <View style={[styles.alignCenter, style.postIconDivision]}>
            <Entypo
              name={'dots-three-horizontal'}
              size={20}
              color={colors.gray}
            />
          </View>
        </View>
        {showPostImage ? (
          <View style={[styles.mainContainer]}>
            <Text style={[style.postDescription, styles.margin1Percent]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Text>
            <ImageBackground
              source={appLogos?.logos}
              resizeMode={'contain'}
              style={style.postBanner}
            />
          </View>
        ) : (
          <View style={[styles.directionRow, styles.justifyCenter]}>
            <View style={style.postImageDivision}></View>
            <View style={[style.postContentDivision]}>
              <Text style={style.postDescription}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </Text>
            </View>
          </View>
        )}
        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            styles.paddingHorizontal2Percent,
            styles.margin1Percent,
          ]}>
          <View style={[styles.directionRow]}>
            <TouchableOpacity activeOpacity={0.9}>
              <AntDesign
                name={'heart'}
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
              <FontAwesome
                name={'comment'}
                size={25}
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
              <AntDesign
                name={'infocirlce'}
                size={20}
                color={colors.gray}
                style={{marginRight: WP('2%')}}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <Text style={style.innerSelectionText}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
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
  postIconDivision: {
    flex: 1,
  },
  postImage: {
    marginLeft: WP('1.5%'),
    width: WP('15%'),
    height: HP('8%'),
  },
  postBanner: {
    width: WP('86%'),
    height: HP('20%'),
    marginVertical: HP('1%'),
  },
  postHeading: {
    fontSize: size.large,
    fontWeight: 'bold',
  },
  postDate: {
    fontSize: size.xxsmall,
  },
  postDescription: {
    fontSize: size.tiny,
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
});

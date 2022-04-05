import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-elements';
import HeaderMain from '../../../../components/HeaderMain';
import Post from '../../../../components/Post';
import Image from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import {WP, HP, colors, size} from '../../../../utilities';
import styles from '../../style';
import style from './styles';
const gallery = [
  {
    id: 0,
    image: appImages?.learningFirst,
  },
  {
    id: 1,
    image: appImages?.learningSecond,
  },
  {
    id: 2,
    image: appImages?.learningThird,
  },
  {
    id: 3,
    image: appImages?.learningFourth,
  },
];
const QADetail = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'QA DETAIL'}
        navigation={navigation}
      />
      <ScrollView>
        <Card
          containerStyle={[
            styles.margin1Percent,
            {
              marginHorizontal: 0,
              borderRadius: 10,
              borderWidth: 0,
            },
          ]}>
          <View style={[styles.directionRow, styles.justifyCenter]}>
            <View
              style={[
                style.postImageDivision,
                styles.alignCenter,
                styles.positionRelative,
              ]}>
              <Image
                local={true}
                resizeMode={'contain'}
                style={style.postImage}
                src={appImages?.postImage}
              />
            </View>
            <View
              style={[
                style.postContentDivision,
                styles.paddingHorizontal4Percent,
                styles.marginHalfPercent,
                {marginLeft: WP('0.5%')},
              ]}>
              <Text style={style.postHeading} numberOfLines={1}>
                Mark Smith
              </Text>
              <Text style={style.postDate} numberOfLines={1}>
                Public
              </Text>
            </View>
            <View style={[styles.alignCenter, style.postIconDivision]}>
              <Text style={style.postDate} numberOfLines={1}>
                Post as:{' '}
                <Text
                  style={[style.postDate, styles.colorPrimary]}
                  numberOfLines={1}>
                  Post
                </Text>
              </Text>
            </View>
          </View>
          <TextInput placeholder={"What's in your mind"} multiline={true} />
          <View style={[styles.margin5Percent, styles.directionRow]}>
            {gallery.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[styles.positionRelative, {marginRight: WP('3%')}]}
                  key={index}>
                  <Image
                    local={true}
                    resizeMode={'contain'}
                    style={style.galleryImage}
                    src={item?.image}
                  />
                  <Image
                    local={true}
                    resizeMode={'contain'}
                    style={style.icon}
                    src={appIcons?.cross}
                  />
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.positionRelative]}>
              <Image
                local={true}
                resizeMode={'contain'}
                style={style.galleryImage}
                src={appImages?.learningThird}
              />
              <Image
                local={true}
                resizeMode={'contain'}
                style={style.iconAdd}
                src={appIcons?.add}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Post showPostImage={true} showTag={false} navigation={navigation} />
        <Post showPostImage={false} showTag={true} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default QADetail;

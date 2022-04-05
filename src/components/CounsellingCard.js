import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import Image from './Img';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const CounsellingCard = ({
  image,
  heading,
  description,
  id,
  index,
  navigation,
}) => {
  return (
    <Card
      containerStyle={{
        marginLeft: WP('1.2%'),
        marginRight: WP('1.2%'),
        paddingVertical: HP('1.7%'),
        borderWidth: 0,
        borderRadius: 10,
        marginTop: HP('1.5%'),
      }}
      key={index}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('SelectTopic', {id, title: heading});
        }}
        style={[styles.directionRow, styles.justifyCenter]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            style.postImageDivision,
            styles.alignCenter,
            styles.positionRelative,
          ]}
          onPress={() => {
            navigation.navigate('SelectTopic', {id, title: heading});
          }}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.postImage}
            src={image}
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
              navigation.navigate('SelectTopic', {id, title: heading});
            }}>
            <Text style={style.postHeading} numberOfLines={1}>
              {heading}
            </Text>
          </TouchableOpacity>
          <Text style={style.postDate} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CounsellingCard;

const style = StyleSheet.create({
  postImageDivision: {
    flex: 1.5,
  },
  postContentDivision: {
    flex: 8.5,
  },
  postImage: {
    width: WP('15%'),
    height: HP('8.5%'),
    borderRadius: 7,
  },
  postHeading: {
    fontSize: size.normal,
    color: colors.mediumGray,
    fontWeight: 'bold',
  },
  postDate: {
    fontSize: size.xxsmall,
    color: colors.gray,
  },
  postDescription: {
    fontSize: size.tiny,
    color: colors.mediumGray,
    lineHeight: 15,
  },
});

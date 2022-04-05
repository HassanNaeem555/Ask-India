import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import Image from './Img';
import {appIcons} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const TopicCard = ({name, image, navigation}) => {
  return (
    <Card
      containerStyle={[
        styles.marginHorizontal1Percent,
        styles.marginVerticle2Percent,
        {
          borderRadius: 15,
          borderWidth: 0.5,
        },
      ]}>
      <TouchableOpacity
        style={styles.directionRow}
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('TopicDetail');
        }}>
        <View style={{flex: 1.7}}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.image}
            src={image ? appIcons?.topics : appIcons?.QA}
          />
        </View>
        <View style={[styles.justifyCenter, {flex: 8.3}]}>
          <Text style={style.heading} numberOfLines={1}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};
export default TopicCard;

const style = StyleSheet.create({
  image: {
    width: WP('9%'),
    height: HP('5.2%'),
  },
  heading: {
    fontSize: size.medium,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});

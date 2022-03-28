import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Image from './Img';
import {WP, HP, colors, size} from '../utilities';
import {appImages} from '../assets';
import styles from '../screens/Main/style';

const Product = ({navigation, name, id}) => {
  return (
    <Card containerStyle={{marginHorizontal: 0}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.postImage}
            src={appImages?.postImage}
          />
        </View>
        <View style={{flex: 6, marginLeft: WP('2%')}}>
          <Text style={style.heading} numberOfLines={2}>
            Mini Drone
          </Text>
          <View style={[styles.marginHalfPercent, {flex: 1}]}>
            <Text style={style.subHeading} numberOfLines={1}>
              Used
            </Text>
            <Text style={style.subHeading} numberOfLines={1}>
              San Jose, CA
            </Text>
            <Text style={style.subHeading} numberOfLines={1}>
              $150
            </Text>
          </View>
        </View>
        <View style={[styles.justifyCenter, styles.alignCenter, {flex: 2}]}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={style.button}
            onPress={() => {
              navigation.navigate('ProductDetail', {name, id});
            }}>
            <AntDesign
              name={'caretright'}
              size={size.small}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default Product;

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

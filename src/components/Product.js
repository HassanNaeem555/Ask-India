import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import Image from './Img';
import {WP, HP, colors, size} from '../utilities';
import {appImages} from '../assets';

const Product = () => {
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
        <View style={{flex: 6, backgroundColor: 'yellow'}}>
          <Text style={style.heading}>Mini Drone</Text>
          <View style={{flex: 1}}>
            <Text style={style.subHeading}>Used</Text>
            <Text style={style.subHeading}>San Jose, CA</Text>
            <Text style={style.subHeading}>$150</Text>
          </View>
        </View>
        <View style={{flex: 2, backgroundColor: 'orange'}}>
          <Text>Product</Text>
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
    fontSize: size.tiny,
    fontWeight: '500',
  },
});

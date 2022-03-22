import React from 'react';
import {StyleSheet} from 'react-native';
import Img from './Img';
import {WP, HP} from '../utilities';

const Logo = ({logo, marginVertical}) => {
  return (
    <Img
      local={true}
      resizeMode={'contain'}
      style={[style.Logo, {marginVertical: marginVertical}]}
      src={logo}
    />
  );
};

export default Logo;

const style = StyleSheet.create({
  Logo: {
    width: WP('100%'),
    height: HP('30%'),
  },
});

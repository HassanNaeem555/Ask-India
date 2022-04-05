import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import Button from './Button';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Image from './Img';
import {appImages, appIcons} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const QACard = ({name, image, navigation}) => {
  const handlePress = () => {
    console.log('running');
  };
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
          navigation.navigate('QADetail');
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

export default QACard;

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

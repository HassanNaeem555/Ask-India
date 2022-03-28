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
import {appImages, appLogos} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const QACard = () => {
  const handlePress = () => {
    console.log('running');
  };
  return (
    <Card containerStyle={{marginHorizontal: 0, marginVertical: HP('0.8%')}}>
      <View style={styles.directionRow}>
        <View style={{flex: 2}}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.postImage}
            src={appImages?.postImage}
          />
        </View>
        <View style={{flex: 8}}>
          <Text style={style.heading} numberOfLines={2}>
            Q & A with President of New York Times
          </Text>
          <Text
            style={[style.description, styles.margin1Percent]}
            numberOfLines={2}>
            A Q & A with Amber Guild, President of T Brand
          </Text>
          <View style={[styles.directionRow, styles.margin2Percent]}>
            <TouchableOpacity
              style={[style.buttonContainer]}
              onPress={() => {
                handlePress();
              }}
              activeOpacity={0.9}>
              <Text style={style.buttonText}>Preview</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.buttonContainer]}
              onPress={() => {
                handlePress();
              }}
              activeOpacity={0.9}>
              <Text style={style.buttonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default QACard;

const style = StyleSheet.create({
  postImage: {
    width: WP('16%'),
    height: HP('9%'),
  },
  heading: {
    fontSize: size.normal,
    fontWeight: '700',
  },
  description: {
    fontSize: size.xxsmall,
    fontWeight: '400',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal: WP('10%'),
    paddingVertical: HP('1.3%'),
    marginRight: WP('1%'),
  },
  buttonText: {
    fontSize: size.xxsmall,
    fontWeight: 'bold',
    color: colors.white,
  },
});

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Image from './Img';
import {appImages, appLogos} from '../assets';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const TopicCard = ({name}) => {
  return (
    <Card
      containerStyle={{
        paddingVertical: HP('0.4%'),
        paddingHorizontal: WP('2%'),
        marginVertical: HP('1%'),
      }}>
      <View style={styles.directionRow}>
        <View style={{flex: 2}}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.likeImage}
            src={appImages?.postImage}
          />
        </View>
        <View style={[styles.justifyCenter, {flex: 6}]}>
          <Text style={style.heading} numberOfLines={1}>
            {name}
          </Text>
        </View>
        <View style={[styles.alignCenter, styles.justifyCenter, {flex: 2}]}>
          <AntDesign
            name={'caretright'}
            size={size.large}
            color={colors.primary}
          />
        </View>
      </View>
    </Card>
  );
};
export default TopicCard;

const style = StyleSheet.create({
  likeImage: {
    marginLeft: WP('0.2%'),
    width: WP('15%'),
    height: HP('10%'),
  },
  heading: {
    fontSize: size.normal,
    fontWeight: '400',
    letterSpacing: 1,
  },
});

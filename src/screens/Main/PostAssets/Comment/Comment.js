import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderMain from '../../../../components/HeaderMain';
import Image from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import {WP, HP, colors, size} from '../../../../utilities';
import styles from '../../style';
import style from './styles';

const Comment = ({navigation}) => {
  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log('itis Profile', response.assets[0].uri);
        // setprofilePhoto(response.assets);
        // setprofilePhotoUris(source);
      }
    });
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={true}
        showNotifications={false}
        headerText={'COMMENTS'}
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={styles.paddingHorizontal3Percent}
        keyboardShouldPersistTaps={'handled'}>
        <View style={[styles.directionRow]}>
          <View style={[styles.alignCenter, {flex: 1}]}>
            <Image
              local={true}
              resizeMode={'contain'}
              style={[style.postImageBorder, styles.positionRelative]}
              src={appImages?.postImageBorder}
            />
            <Image
              local={true}
              resizeMode={'contain'}
              style={style.postImage}
              src={appImages?.postImageRounded}
            />
          </View>
          <View
            style={[
              styles.paddingHorizontal4Percent,
              styles.marginHalfPercent,
              {flex: 7, marginLeft: WP('0.5%')},
            ]}>
            <Text style={style.postHeading} numberOfLines={1}>
              Mark Smith
            </Text>
            <Text style={[style.otherUserMessage, styles.marginHalfPercent]}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed
            </Text>
            <View
              style={[
                styles.directionRow,
                styles.justifySpaceBetween,
                styles.margin1Percent,
              ]}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  styles.directionRow,
                  styles.justifyCenter,
                  styles.alignCenter,
                ]}
                // onPress={() => navigation.navigate('Like', {id: 1})}
              >
                <AntDesign
                  name={'like1'}
                  size={size.xxlarge}
                  color={colors.primary}
                  style={{marginRight: WP('2%')}}
                />
                <Text style={style.otherUserMessage}>Like</Text>
              </TouchableOpacity>
              <Text style={[style.otherUserMessage]}>04:45 PM</Text>
            </View>
          </View>
        </View>
        <View
          style={[style.seperator, styles.marginVerticleHalfPercent]}></View>
        <View style={[styles.directionRow]}>
          <View style={[styles.alignCenter, {flex: 1}]}>
            <Image
              local={true}
              resizeMode={'contain'}
              style={[style.postImageBorder, styles.positionRelative]}
              src={appImages?.postImageBorder}
            />
            <Image
              local={true}
              resizeMode={'contain'}
              style={style.postImage}
              src={appImages?.postImageRounded}
            />
          </View>
          <View
            style={[
              styles.paddingHorizontal4Percent,
              styles.marginHalfPercent,
              {flex: 7, marginLeft: WP('0.5%')},
            ]}>
            <Text style={style.postHeading} numberOfLines={1}>
              Mark Smith
            </Text>
            <Text style={[style.otherUserMessage, styles.marginHalfPercent]}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed
            </Text>
            <View
              style={[
                styles.directionRow,
                styles.justifySpaceBetween,
                styles.margin1Percent,
              ]}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  styles.directionRow,
                  styles.justifyCenter,
                  styles.alignCenter,
                ]}
                // onPress={() => navigation.navigate('Like', {id: 1})}
              >
                <AntDesign
                  name={'like1'}
                  size={size.xxlarge}
                  color={colors.primary}
                  style={{marginRight: WP('2%')}}
                />
                <Text style={style.otherUserMessage}>Like</Text>
              </TouchableOpacity>
              <Text style={[style.otherUserMessage]}>04:45 PM</Text>
            </View>
          </View>
        </View>
        <View
          style={[style.seperator, styles.marginVerticleHalfPercent]}></View>
      </ScrollView>
      <View
        style={[
          styles.directionRow,
          styles.bgWhite,
          styles.marginVerticle2Percent,
          styles.marginHorizontal1Percent,
          styles.paddingHorizontal1Percent,
          styles.justifyCenter,
          styles.alignCenter,
          style.chatuser,
        ]}>
        <View style={{flex: 1}}>
          <TouchableOpacity activeOpacity={0.9} onPress={launchImageLibrary}>
            <Image
              local={true}
              resizeMode={'contain'}
              style={style.sendCamera}
              src={appIcons?.cameraChat}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 8}}>
          <TextInput placeholder={'Write a Comment'} multiline={true} />
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              local={true}
              resizeMode={'contain'}
              style={style.sendMessage}
              src={appIcons?.send}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Comment;

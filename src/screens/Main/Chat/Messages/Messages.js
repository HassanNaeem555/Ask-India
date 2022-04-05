import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import HeaderMain from '../../../../components/HeaderMain';
import * as ImagePicker from 'react-native-image-picker';
import Image from '../../../../components/Img';
import {appImages, appIcon, appIcons} from '../../../../assets';
import {WP, HP, colors, size} from '../../../../utilities';
import styles from '../../style';
import style from './styles';
import {color} from 'react-native-reanimated';

const Messages = ({navigation, route}) => {
  const {id, name} = route.params;
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
        showSearch={false}
        showNotifications={false}
        headerText={name}
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
              style={style.userImage}
              src={appImages?.postImage}
            />
          </View>
          <View
            style={[
              styles.paddingHorizontal4Percent,
              styles.marginHalfPercent,
              {flex: 7, marginLeft: WP('0.5%')},
            ]}>
            <Text style={[style.otherUserMessage, styles.marginHalfPercent]}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed
            </Text>
            <Text style={[style.otherUserMessage, styles.margin1Percent]}>
              04:45 PM
            </Text>
          </View>
        </View>
        <View style={[styles.directionRow, styles.justifyEnd, styles.alignEnd]}>
          <View style={{flex: 4}}></View>
          <View
            style={[
              styles.marginHalfPercent,
              style.blockOfMessage,
              styles.paddingHorizontal4Percent,
              styles.padding2Percent,
              styles.alignEnd,
              styles.justifyEnd,
              {flex: 6},
            ]}>
            <Text style={style.ourUserMessage}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
            <Text style={[style.ourUserMessage, styles.margin1Percent]}>
              04:45 PM
            </Text>
          </View>
        </View>
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

export default Messages;

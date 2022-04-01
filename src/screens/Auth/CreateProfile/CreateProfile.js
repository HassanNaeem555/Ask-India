import React, {useState} from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import * as ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderMain from '../../../components/HeaderMain';
import {appLogos, appImages} from '../../../assets';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';
import {colors, HP, WP, size} from '../../../utilities';
// redux stuff

const CreateProfile = ({navigation}) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [profilePhotoUri, setprofilePhotoUri] = useState(
    appImages?.profileImage,
  );
  const [profilePhotoUris, setprofilePhotoUris] = useState('');
  const [profilePhoto, setprofilePhoto] = useState([]);
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
        setprofilePhoto(response.assets);
        setprofilePhotoUris(source);
      }
    });
  };
  const onChangeEmail = val => {};
  const handlePress = () => {
    navigation.navigate('PlaceLocation');
  };
  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <HeaderMain
          navigateLeftIcon={navigation.pop}
          leftIcon={'chevron-back'}
          showSearch={false}
          showNotifications={false}
          headerText={'CREATE PROFILE'}
          navigation={navigation}
        />
        <View style={[styles.alignCenter, styles.alignSelfStretch]}>
          <View
            style={[
              styles.directionRow,
              styles.alignCenter,
              styles.positionRelative,
            ]}>
            <ImageBackground
              source={appImages.userProfileBg}
              resizeMode={'contain'}
              style={{
                width: WP('30%'),
                height: HP('20%'),
              }}>
              <TouchableOpacity
                style={{top: HP('4%')}}
                activeOpacity={0.8}
                onPress={launchImageLibrary}>
                <Image
                  resizeMode={'contain'}
                  source={
                    profilePhotoUris == '' ? profilePhotoUri : profilePhotoUris
                  }
                  style={[
                    styles.w_30,
                    {
                      height: HP('12%'),
                    },
                  ]}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={[styles.margin3Percent, styles.w_90]}>
            <CustomInput
              placeholder={'Enter Your Name'}
              iconName={'user'}
              iconType={'ant-design'}
              leftIconShow={true}
              error_message={errorMsg}
              change={onChangeEmail}
            />
          </View>
          <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
            <Button
              buttonText={'CONTINUE'}
              handlePress={handlePress}
              width={WP('90%')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CreateProfile;

import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import * as ImagePicker from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import {appImages, appIcons} from '../../../assets';
import {image_url} from '../../../utils/url';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';

const EditProfile = ({navigation}) => {
  const {user_name, user_email, user_id, user_state, user_city, user_image} =
    useSelector(state => state.authReducer.user);
  const [userName, setUserName] = useState(user_name);
  const [userState, setUserState] = useState(user_state);
  const [userCity, setUserCity] = useState(user_city);
  const [profilePhoto, setprofilePhoto] = useState([]);
  const [profilePhotoUri, setprofilePhotoUri] = useState(appIcons?.camera);
  const [profilePhotoUris, setprofilePhotoUris] = useState(
    user_image !== null && {
      uri: image_url + user_image,
    },
  );
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
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'EDIT PROFILE'}
        navigation={navigation}
      />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={[
          styles.alignCenter,
          {flexGrow: 1, padding: 10},
        ]}>
        <View style={styles.alignSelfStretch}>
          <View
            style={[
              styles.directionRow,
              styles.justifyCenter,
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
                style={[styles.alignCenter, {top: HP('4%')}]}
                activeOpacity={0.8}
                onPress={launchImageLibrary}>
                <Image
                  resizeMode={'contain'}
                  source={profilePhotoUris ? profilePhotoUris : profilePhotoUri}
                  style={[
                    styles.w_15,
                    {
                      height: HP('12%'),
                    },
                  ]}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <CustomInput
            placeholder={'Full Name'}
            defaultValue={userName}
            leftIconShow={false}
          />
          <CustomInput
            placeholder={'City Name'}
            defaultValue={userCity}
            leftIconShow={false}
          />
          <CustomInput
            placeholder={'State Name'}
            defaultValue={userState}
            leftIconShow={false}
          />
          <View style={[styles.marginVerticle2Percent]}>
            <Button
              buttonText={'UPDATE'}
              handlePress={handlePress}
              width={WP('90%')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import * as ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import { useSelector, useDispatch } from 'react-redux';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import { saveUserProfile } from '../../../store/actions/authAction';
import { updateProfile } from '../../../utils/api';
import { postApiFetch } from '../../../utils/apiFunction';
import { appImages, appIcons } from '../../../assets';
import { image_url } from '../../../utils/url';
import { WP, HP, colors, size } from '../../../utilities';
import styles from '../style';

const EditProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user_name, user_id, user_state, user_city, user_image } = useSelector(
    state => state.authReducer.user,
  );
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const [userName, setUserName] = useState('');
  const [userState, setUserState] = useState('');
  const [userCity, setUserCity] = useState('');
  const [profilePhoto, setprofilePhoto] = useState([]);
  const [profilePhotoUri, setprofilePhotoUri] = useState(appIcons?.camera);
  const [loading, setLoading] = useState(false);
  const [profilePhotoUris, setprofilePhotoUris] = useState(
    user_image !== null && {
      uri: image_url + user_image,
    },
  );
  const onChangeName = val => {
    setUserName(val);
  };
  const onChangeCity = val => {
    setUserCity(val);
  };
  const onChangeState = val => {
    setUserState(val);
  };
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
        const source = { uri: response.assets[0].uri };
        console.log('itis Profile', response.assets[0].uri);
        console.log('itis Profile', response.assets);
        setprofilePhoto(response.assets);
        setprofilePhotoUris(source);
      }
    });
  };
  const handlePress = async () => {
    setLoading(!loading);
    const params = new FormData();
    params.append('user_name', userName == '' ? user_name : userName);
    params.append(
      'user_state',
      userState == '' ? user_state : userState,
    );
    params.append('user_city', userCity == '' ? user_city : userCity);
    params.append('user_id', user_id);
    if (profilePhoto.length > 0) {
      params.append('user_image', {
        uri: profilePhoto[0].uri,
        type: profilePhoto[0].type,
        name: `Profile${Date.now()}.${profilePhoto[0].type.slice(
          profilePhoto[0].type.lastIndexOf('/') + 1,
        )}`,
      });
    }
    console.log('params', params);
    const { data, message, status } = await postApiFetch(updateProfile, params, bearer_token);
    if (status == 1) {
      console.log('data update profile', data);
      dispatch(saveUserProfile(data));
      Toast.show(message, Toast.LONG);
      navigation.goBack();
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
    setLoading(false);
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
          { flexGrow: 1, padding: 10 },
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
                style={[styles.alignCenter, { top: HP('4%') }]}
                activeOpacity={0.8}
                onPress={launchImageLibrary}>
                <Image
                  resizeMode={'contain'}
                  source={profilePhotoUris ? profilePhotoUris : profilePhotoUri}
                  style={[
                    styles.w_15,
                    {
                      height: HP('12%'),
                      borderRadius: 20,
                    },
                  ]}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <CustomInput
            placeholder={user_name ? user_name : 'Enter Your Name'}
            leftIconShow={false}
            change={onChangeName}
          />
          <CustomInput
            placeholder={user_city ? user_city : 'Enter Your City'}
            leftIconShow={false}
            change={onChangeCity}
          />
          <CustomInput
            placeholder={user_state ? user_state : 'Enter Your State'}
            leftIconShow={false}
            change={onChangeState}
          />
          <View style={[styles.marginVerticle2Percent]}>
            {loading ? (
              <LoadingButton width={WP('90%')} />
            ) : (
              <Button
                buttonText={'UPDATE'}
                handlePress={handlePress}
                width={WP('90%')}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

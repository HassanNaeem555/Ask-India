import React, {useState} from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import * as ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  const [profilePhotoUri, setprofilePhotoUri] = useState(appImages?.profileImage);
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
        const source = {uri: response.uri};
        console.log('itis Profile', response);
        setprofilePhoto(response.assets);
        setprofilePhotoUri(response.assets[0].uri);
      }
    });
  };
  const onChangeEmail = val => {};
  const handlePress = () => {
    navigation.navigate('PlaceLocation')
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.alignCenter, {flexGrow: 1, padding: 16}]}
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Logo logo={appLogos.logo} marginVertical={HP('3%')} />
        <View
          style={[
            styles.directionRow,
            styles.alignCenter,
            styles.positionRelative,
          ]}>
          <Image
            resizeMode={'contain'}
            source={profilePhotoUri}
            style={[
              styles.w_30,
              {
                height: HP('15%'),
                borderRadius: HP('15%') / 2,
              },
            ]}
          />
          <TouchableOpacity
          activeOpacity={0.8}
           onPress={launchImageLibrary}
            style={[
              styles.positionAbsolute,
              styles.paddingHorizontal2Percent,
              styles.padding1Percent,
              {
                backgroundColor: colors.primary,
                left: WP('11.5%'),
                bottom: HP('-1.5%'),
              },
            ]}>
            <AntDesign
              name={'download'}
              size={size.normal}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <CustomInput
          label={'Enter Your Name'}
          placeholder={'Enter Your Name'}
          iconName={'user'}
          iconType={'ant-design'}
          leftIconShow={true}
          error_message={errorMsg}
          change={onChangeEmail}
        />
        <View style={[styles.alignCenter, styles.marginVerticle5Percent]}>
          <Button
            buttonText={'NEXT'}
            handlePress={handlePress}
            width={WP('90%')}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateProfile;

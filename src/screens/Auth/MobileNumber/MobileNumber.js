import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import HeaderMain from '../../../components/HeaderMain';
import FooterAuth from '../../../components/footerAuth';
import CountryPicker from 'react-native-country-picker-modal';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';

const MobileNumber = ({navigation}) => {
  const [pickerEnabled, setpickerEnabled] = useState(false);
  const [countries, setCountries] = useState([]);
  const [checked, setChecked] = useState(false);
  const [country, setCountry] = useState({
    code: 'JO',
    id: 111,
    name: 'Jordan',
    name_ar: 'Jordan',
    name_en: 'Jordan',
    name_ku: 'Jordan',
    callingCode: ['962'],
    status: 1,
  });
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const onSelect = country_data => {
    console.log('country_data', country_data);
    setCountry(country_data);
    setChecked(country_data?.code);
    setpickerEnabled(false);
  };
  const handlePress = () => {
    console.log('runnung');
    navigation.navigate('OTP');
  };
  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.flex8}>
          <HeaderMain
            navigateLeftIcon={navigation.pop}
            leftIcon={'chevron-back'}
            showSearch={false}
            showNotifications={false}
            headerText={'PHONE NUMBER'}
            navigation={navigation}
          />
          <View style={[styles.alignCenter, styles.alignSelfStretch]}>
            {pickerEnabled && (
              <CountryPicker
                {...{
                  withFilter,
                  withAlphaFilter,
                  withCallingCode,
                  onSelect,
                }}
                onClose={() => setpickerEnabled(false)}
                visible
              />
            )}
            <Logo logo={appLogos.logo} marginVertical={HP('4%')} />
            <View
              style={[styles.directionRow, styles.marginVerticle1HalfPercent]}>
              <View style={style.inputLeftPanel}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setpickerEnabled(true)}
                  style={style.countryPickerContainer}>
                  <Text style={{color: colors.white}}>
                    {country !== null ? `+${country?.callingCode[0]}` : `+962`}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={style.inputRightPanel}>
                <CustomInput
                  placeholder={'000 0000 0000'}
                  iconName={'phone'}
                  iconType={'fontisto'}
                  leftIconShow={true}
                />
              </View>
            </View>
            <View style={[styles.alignCenter, styles.marginVerticle1Percent]}>
              <Button
                buttonText={'CONTINUE'}
                handlePress={handlePress}
                width={WP('90%')}
              />
            </View>
          </View>
        </View>
        <View style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
          <FooterAuth
            mainText={'Already have an account ? '}
            where={'Login here'}
            navigation={navigation}
            screen_name={'Login'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default MobileNumber;

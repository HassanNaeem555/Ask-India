import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
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
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={[styles.alignCenter, {flexGrow: 1, padding: 16}]}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
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
        <Logo logo={appLogos.logo} marginVertical={HP('5%')} />
        <View style={[styles.directionRow, styles.marginVerticle2Percent]}>
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
        <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
          <Button
            buttonText={'NEXT'}
            handlePress={handlePress}
            width={WP('90%')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MobileNumber;

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {appLogos} from '../../../assets';
import {colors, WP, HP} from '../../../utilities';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';

const ChangePassword = ({navigation}) => {
  const {navigate} = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsgPassword, seterrorMsgPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onChangeEmail = val => {
    setEmail(val);
  };
  const onChangePassword = val => {
    setPassword(val);
  };
  const onChangeConfirmPassword = val => {
    setConfirmPassword(val);
  };
  const handlePress = () => {
    // navigate('Pin');
  };
  const changeScreen = screen_name => {
    navigate(screen_name);
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
          headerText={'Change Password'}
          navigation={navigation}
        />
        <View style={styles.mainContainer}>
          <View style={[styles.alignCenter, styles.alignSelfStretch]}>
            <Logo logo={appLogos.logo} marginVertical={HP('3%')} />
            <CustomInput
              placeholder={'Enter Existing Password'}
              iconName={showPassword ? 'lock' : 'lock-open'}
              iconType={'entypo'}
              leftIconShow={true}
              iconNameRight={showPassword ? 'eye-with-line' : 'eye'}
              rightIconShow={true}
              rightIconColor={colors.gray}
              handlePress={handleShowPassword}
              secureTextEntry={showPassword}
              error_message={errorMsgPassword}
              change={onChangePassword}
            />
            <CustomInput
              placeholder={'Enter Your Password'}
              iconName={showPassword ? 'lock' : 'lock-open'}
              iconType={'entypo'}
              leftIconShow={true}
              iconNameRight={showPassword ? 'eye-with-line' : 'eye'}
              rightIconShow={true}
              rightIconColor={colors.gray}
              handlePress={handleShowPassword}
              secureTextEntry={showPassword}
              error_message={errorMsgPassword}
              change={onChangePassword}
            />
            <CustomInput
              placeholder={'Confirm Password'}
              iconName={showPassword ? 'lock' : 'lock-open'}
              iconType={'entypo'}
              leftIconShow={true}
              iconNameRight={showPassword ? 'eye-with-line' : 'eye'}
              rightIconShow={true}
              rightIconColor={colors.gray}
              handlePress={handleShowConfirmPassword}
              secureTextEntry={showConfirmPassword}
              error_message={errorMsgPassword}
              change={onChangeConfirmPassword}
            />
            <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
              <Button
                buttonText={'Change'}
                handlePress={handlePress}
                width={WP('90%')}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ChangePassword;

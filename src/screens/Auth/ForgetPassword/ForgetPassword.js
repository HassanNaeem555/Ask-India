import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {appLogos} from '../../../assets';
import {colors, WP, HP} from '../../../utilities';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import LoadingButton from '../../../components/LoadingButton';
import {updatePassword} from '../../../utils/api';
import {putApi} from '../../../utils/apiFunction';
import styles from '../style';

var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .has()
  .symbols();

const ForgetPassword = ({navigation}) => {
  const {user_id} = useSelector(state => state.authReducer.user);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsgPassword, seterrorMsgPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onChangePassword = val => {
    setPassword(val);
  };
  const onChangeConfirmPassword = val => {
    setConfirmPassword(val);
  };
  const handlePress = async () => {
    if (!password) {
      Toast.show('Please Enter Password', Toast.LONG);
      return;
    }
    if (!schema.validate(password)) {
      Toast.show(
        'Password not valid (Use atleast one UpperCase Letter, one number and one special character)',
        Toast.LONG,
      );
      return;
    }
    if (password !== confirmPassword) {
      Toast.show('Password And Confirm Password Need To Be Same', Toast.LONG);
      return;
    }
    setLoading(!loading);
    console.log('bearer_token', bearer_token);
    let send_data = {
      user_id,
      user_new_password: password,
    };
    const {message, status} = await putApi(updatePassword, send_data, {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
    });
    if (status == 1) {
      setLoading(false);
      Toast.show(message, Toast.LONG);
      navigation.navigate('Login');
    } else if (status == 0) {
      setLoading(false);
      Toast.show(message, Toast.LONG);
    }
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
              placeholder={'Enter Your New Password'}
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
              iconName={showConfirmPassword ? 'lock' : 'lock-open'}
              iconType={'entypo'}
              leftIconShow={true}
              iconNameRight={showConfirmPassword ? 'eye-with-line' : 'eye'}
              rightIconShow={true}
              rightIconColor={colors.gray}
              handlePress={handleShowConfirmPassword}
              secureTextEntry={showConfirmPassword}
              error_message={errorMsgPassword}
              change={onChangeConfirmPassword}
            />
            <View style={[styles.alignCenter, styles.marginVerticle2Percent]}>
              {loading ? (
                <LoadingButton width={WP('90%')} />
              ) : (
                <Button
                  buttonText={'Change'}
                  handlePress={handlePress}
                  width={WP('90%')}
                />
              )}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default ForgetPassword;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Toast from 'react-native-simple-toast';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import HeaderMain from '../../../components/HeaderMain';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import Logo from '../../../components/logo';
import styles from '../style';
import style from './styles';

const CELL_COUNT = 6;

const OTP = ({navigation, route}) => {
  const {from} = route.params;
  const [value, setValue] = useState('');
  const [enableMask, setEnableMask] = useState(true);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = enableMask ? '•' : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[style.cell, isFocused && style.focusCell]}
        // onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };
  const onCompleteTimer = () => {
    console.log('onCompleteTimer', from);
    if (from == 'forget') {
      navigation.navigate('Login');
    }
    if (from == 'MobileNumber') {
      navigation.navigate('Login');
    }
    if (from == 'Signup') {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Continue');
    }
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
            headerText={'VERIFICATION'}
            navigation={navigation}
          />
          <View style={[styles.alignCenter, styles.alignSelfStretch]}>
            <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
            <View style={{paddingHorizontal: WP('2%')}}>
              <View
                style={[
                  styles.w_100,
                  styles.alignCenter,
                  styles.justifyCenter,
                ]}>
                <Text
                  style={[
                    style.subHeading,
                    styles.colorBlack,
                    styles.w_85,
                    {textAlign: 'center'},
                  ]}>
                  We have sent you an email containing VERIFICATION CODE and
                  instructions, please follow the instructions to verify your
                  email address.
                </Text>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={style.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={renderCell}
                  onEndEditing={() => {
                    navigation.navigate('Continue');
                  }}
                />
              </View>
              <View
                style={[
                  styles.justifyCenter,
                  styles.alignCenter,
                  styles.margin2Percent,
                ]}>
                <CountdownCircleTimer
                  isPlaying
                  duration={120}
                  colors={[colors.secondary, colors.primary]}
                  colorsTime={[6, 4]}
                  size={140}
                  onComplete={onCompleteTimer}>
                  {({remainingTime}) => {
                    const minutes = Math.floor((remainingTime % 3600) / 60);
                    const seconds = remainingTime % 60;
                    return (
                      <Text
                        style={{
                          color: colors.primary,
                          fontSize: size.medium,
                        }}>{`0${minutes}:${seconds}`}</Text>
                    );
                  }}
                </CountdownCircleTimer>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.justifyCenter, styles.alignCenter, styles.flex2]}>
          <Text style={styles.footerText}>
            Didn't recieve code ?{' '}
            <Text
              style={[styles.footerTextAuth, styles.colorPrimary]}
              onPress={() => Toast.show('OTP Resend')}>
              Resend
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default OTP;

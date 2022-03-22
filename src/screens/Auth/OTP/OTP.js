import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Entypo from 'react-native-vector-icons/Entypo';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import Logo from '../../../components/logo';
import CountDown from 'react-native-countdown-component';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';
const CELL_COUNT = 6;
const {width} = Dimensions.get('screen');
const OTP = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [enableMask, setEnableMask] = useState(true);
  const [otpTimer, setOtpTimer] = useState(60 * 2);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [errorMsg, setErrorMsg] = useState('');
  const toggleMask = () => setEnableMask(f => !f);

  const handlePress = () => {
    navigation.navigate('Continue');
  };
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
  useEffect(() => {
    return () => {
      setOtpTimer(0);
    };
  }, []);
  return (
    <View style={[styles.mainContainer, styles.alignCenter, {flexGrow: 1}]}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Logo logo={appLogos.logo} marginVertical={HP('5%')} />
        <View style={{paddingHorizontal: WP('2%')}}>
          <View
            style={[styles.w_100, styles.alignCenter, styles.justifyCenter]}>
            <Text style={style.heading}>Enter OTP Here</Text>
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
            />
            {/* <TouchableOpacity
              activeOpacity={0.9}
              onPress={toggleMask}
              style={[styles.directionRow, styles.margin2Percent]}>
              <Entypo
                name={enableMask ? 'eye' : 'eye-with-line'}
                size={size.h4}
                color={colors.gray}
              />
              <Text style={style.toggle}>View Code</Text>
            </TouchableOpacity> */}
          </View>
          <View
            style={[
              styles.directionRow,
              styles.justifySpaceBetween,
              styles.marginVerticle1Percent,
              styles.paddingHorizontal6Percent,
            ]}>
            <Text style={[style.subHeading]}>
              Didn't recieve Code?{' '}
              <Text
                style={[style.subHeading, styles.fontBold, styles.colorBlack]}
                onPress={() => console.log('Running')}>
                Resend
              </Text>
            </Text>
            <CountDown
              until={otpTimer}
              size={9}
              timeLabels={{m: null, s: null}}
              // onFinish={() => setResent(true)}
              digitStyle={{backgroundColor: '#FFF', width: 40}}
              digitTxtStyle={{color: colors.primary, fontSize: size.xsmall}}
              timeToShow={['M', 'S']}
              showSeparator={true}
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
    </View>
  );
};

export default OTP;

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {CheckBox, Card} from 'react-native-elements';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import Img from '../../../components/Img';
import Button from '../../../components/Button';
import styles from '../style';
import style from './styles';

const {width} = Dimensions.get('screen');
const Agreement = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('MobileNumber');
  };
  const [termsCondition, setTermsCondition] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={[
        styles.alignCenter,
        styles.justifyEvenly,
        {flexGrow: 1},
      ]}>
      <View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Img
          local={true}
          resizeMode={'contain'}
          style={style.splashLogo}
          src={appLogos.logo}
        />
        <Text style={[style.forgotText, styles.marginVerticle1Percent]}>
          Agreement
        </Text>
        <View
          style={[
            styles.w_90,
            styles.paddingHorizontal3Percent,
            styles.padding3Percent,
            {
              margin: 0,
              borderWidth: 1,
              borderColor: colors.lightGray,
              elevation: 1,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
            }}>
            <CheckBox
              checked={termsCondition}
              onPress={() => setTermsCondition(!termsCondition)}
              checkedColor={colors.primary}
              containerStyle={{
                backgroundColor: '#fff',
                borderWidth: 0,
                padding: 0,
                margin: 0,
              }}
            />
            <View style={{flexDirection: 'row', left: -5, top: 2}}>
              <Text style={{fontSize: size.normal, fontWeight: '600'}}>
                Terms And Conditions{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
            <CheckBox
              checked={privacyPolicy}
              onPress={() => setPrivacyPolicy(!privacyPolicy)}
              checkedColor={colors.primary}
              containerStyle={{
                backgroundColor: colors.white,
                borderWidth: 0,
                padding: 0,
                margin: 0,
              }}
              textStyle={{
                fontSize: size.xxsmall,
                fontWeight: '500',
                color: colors.secondaryDark,
              }}
            />
            <View style={{flexDirection: 'row', left: -5, top: 2}}>
              <Text style={{fontSize: size.normal, fontWeight: '600'}}>
                Privacy Policy{' '}
              </Text>
            </View>
          </View>
          <View style={{marginLeft: width * 0.03}}>
            <Text style={[style.forgotText, styles.marginVerticle1HalfPercent]}>
              Disclaimar
            </Text>
            <Text style={[{fontSize: 14}]}>
              lorem ipsum dolor sit amet, consect
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.marginVerticle2Percent,
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          ]}>
          <Button
            buttonText={'Reject'}
            handlePress={handlePress}
            width={WP('42%')}
            rightMargin={HP('2%')}
          />
          <Button
            buttonText={'Accept'}
            handlePress={handlePress}
            width={WP('42%')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Agreement;

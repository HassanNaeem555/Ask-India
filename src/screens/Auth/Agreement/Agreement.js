import React, {useState} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {appLogos} from '../../../assets';
import {colors, size, WP, HP} from '../../../utilities';
import Logo from '../../../components/logo';
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
      contentContainerStyle={[styles.alignCenter, {flexGrow: 1}]}>
      <View style={[styles.alignCenter, styles.alignSelfStretch]}>
        <Logo logo={appLogos.logo} marginVertical={HP('5%')} />
        <Text style={[style.headingText, styles.marginVerticle1Percent]}>
          Agreement
        </Text>
        <View
          style={[
            styles.w_90,
            styles.paddingHorizontal4Percent,
            styles.padding3Percent,
            {
              borderWidth: 2,
              borderColor: colors.lightGray,
            },
          ]}>
          <View
            style={[
              styles.directionRow,
              styles.w_100,
              {
                marginTop: 10,
              },
            ]}>
            <CheckBox
              checked={termsCondition}
              onPress={() => setTermsCondition(!termsCondition)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor={colors.gray}
              uncheckedColor={colors.primary}
              containerStyle={{
                backgroundColor: colors.white,
                borderWidth: 0,
                padding: 0,
                margin: 0,
              }}
            />
            <View style={[styles.directionRow, {left: -5, top: 2}]}>
              <Text style={style.selectionText}>Terms And Conditions </Text>
            </View>
          </View>
          <View
            style={[styles.directionRow, styles.w_100, styles.margin2Percent]}>
            <CheckBox
              checked={privacyPolicy}
              onPress={() => setPrivacyPolicy(!privacyPolicy)}
              checkedColor={colors.gray}
              uncheckedColor={colors.primary}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: colors.white,
                padding: 0,
                margin: 0,
              }}
            />
            <View style={[styles.directionRow, {left: -5, top: 2}]}>
              <Text style={style.selectionText}>Privacy Policy </Text>
            </View>
          </View>
          <View
            style={[
              styles.marginVerticle1HalfPercent,
              {marginLeft: width * 0.03},
            ]}>
            <Text style={style.subHeadingText}>Disclaimar</Text>
            <Text style={style.descriptionText}>
              lorem ipsum dolor sit amet, consect
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.marginVerticle2Percent,
            styles.directionRow,
            styles.justifySpaceAround,
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

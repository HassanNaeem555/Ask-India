import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import HeaderMain from '../../../components/HeaderMain';
import Img from '../../../components/Img';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import {appLogos} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const EditProfile = ({navigation}) => {
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'ios-caret-back-outline'}
        showSearch={false}
        showNotifications={false}
        headerText={'Edit Profile'}
        navigation={navigation}
      />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={[
          styles.alignCenter,
          {flexGrow: 1, padding: 10},
        ]}>
        <View style={styles.alignSelfStretch}>
          <Img
            local={true}
            resizeMode={'contain'}
            style={style.Logo}
            src={appLogos?.logo}
          />
          <CustomInput placeholder={'Name:'} leftIconShow={false} />
          <CustomInput placeholder={'Program Enrolled'} leftIconShow={false} />
          <CustomInput placeholder={'City'} leftIconShow={false} />
          <CustomInput placeholder={'College Name'} leftIconShow={false} />
          <View style={[styles.marginVerticle2Percent]}>
            <Button
              buttonText={'UPDATE'}
              handlePress={handlePress}
              width={WP('90%')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

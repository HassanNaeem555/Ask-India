import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderMain from '../../../components/HeaderMain';
import Image from '../../../components/Img';
import {WP, HP, colors, size} from '../../../utilities';
import {appLogos, appImages} from '../../../assets';
import styles from '../style';
import style from './styles';

const ProductDetail = ({navigation, route}) => {
  const {name, id} = route.params;
  return (
    <View style={[styles.mainContainer, {backgroundColor: colors.whiteLow}]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'ios-caret-back-outline'}
        showSearch={false}
        showNotifications={false}
        headerText={name}
        navigation={navigation}
      />
      <View style={{flex: 1}}>
        <View style={{flex: 4.5}}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.Logo}
            src={appLogos?.logos}
          />
        </View>
        <View
          style={[
            styles.margin5Percent,
            styles.paddingHorizontal4Percent,
            {flex: 5.5},
          ]}>
          <Text style={[style.heading, styles.fontBold]}>Details</Text>
          <View style={[styles.margin2Percent]}>
            <Text style={style.subHeading}>Title: Room Availble</Text>
            <Text style={style.subHeading}>Type: 3 bed on sharing</Text>
            <Text style={style.subHeading}>Number: (408) 300-0855</Text>
            <Text style={style.subHeading}>
              Address: 954 Walglen Ct City: San Jose, California (CA), 91536
            </Text>
          </View>
          <View
            style={[
              styles.margin2Percent,
              styles.directionRow,
              styles.justifyStart,
            ]}>
            <TouchableOpacity activeOpacity={0.9} style={[style.socialButton]}>
              <FontAwesome
                name={'phone'}
                size={size.large}
                color={colors.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={[style.socialButton]}>
              <Ionicons
                name={'mail'}
                size={size.large}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

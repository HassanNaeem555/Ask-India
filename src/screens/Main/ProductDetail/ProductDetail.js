import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderMain from '../../../components/HeaderMain';
import Image from '../../../components/Img';
import {WP, HP, colors, size} from '../../../utilities';
import {appLogos, appImages, appIcons} from '../../../assets';
import styles from '../style';
import style from './styles';

const ProductDetail = ({navigation, route}) => {
  const {name, id} = route.params;
  return (
    <View style={[styles.mainContainer]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={name + ' DETAILS'}
        navigation={navigation}
      />
      <View style={{flex: 1}}>
        <View style={{flex: 4}}>
          <Image
            local={true}
            resizeMode={'contain'}
            style={style.Logo}
            src={appLogos?.logos}
          />
        </View>
        <View style={[styles.paddingHorizontal4Percent, {flex: 6}]}>
          <Text
            style={[
              style.heading,
              styles.margin1Percent,
              styles.marginHorizontal1Percent,
            ]}>
            Details
          </Text>
          <Card
            containerStyle={{
              borderWidth: 0,
              borderRadius: 10,
              marginHorizontal: 0,
            }}>
            <View style={[styles.directionRow, styles.marginVerticle1Percent]}>
              <View style={{flex: 4}}>
                <View style={[styles.directionRow]}>
                  <Image
                    local={true}
                    resizeMode={'contain'}
                    style={style.image}
                    src={appIcons?.iconUnCheckQuestion}
                  />
                  <Text style={style.normalText}>Topic</Text>
                </View>
              </View>
              <View style={{flex: 6}}>
                <Text style={[style.normalText, styles.colorHardDarkGray]}>
                  Counselling
                </Text>
              </View>
            </View>
            <View style={[styles.directionRow, styles.marginVerticle1Percent]}>
              <View style={{flex: 4}}>
                <View style={[styles.directionRow]}>
                  <Image
                    local={true}
                    resizeMode={'contain'}
                    style={style.image}
                    src={appIcons?.iconUnCheckQuestion}
                  />
                  <Text style={style.normalText}>Counsellar</Text>
                </View>
              </View>
              <View style={{flex: 6}}>
                <Text style={[style.normalText, styles.colorHardDarkGray]}>
                  Dr.Marcus Ohm
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

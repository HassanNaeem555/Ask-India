import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import QACard from '../../../components/QACard';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const QA = ({navigation}) => {
  const drawerOpen = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        leftIcon={'ios-menu-sharp'}
        showSearch={true}
        showNotifications={true}
        headerText={'Q & A'}
        navigation={navigation}
        navigateLeftIcon={drawerOpen}
      />
      <View style={{flex: 8.8}}>
        <ScrollView>
          <QACard />
          <QACard />
          <QACard />
        </ScrollView>
      </View>
      <View style={{flex: 1.2}}>
        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            styles.margin1Percent,
          ]}>
          <TouchableOpacity activeOpacity={0.9} style={style.buttonContainer}>
            <Text style={style.buttonText}>Invite Your Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={style.buttonContainer}>
            <Text style={style.buttonText}>Create Topics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QA;

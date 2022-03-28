import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderMain from '../../../components/HeaderMain';
import TopicCard from '../../../components/TopicCard';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Topic = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        leftIcon={'ios-grid'}
        showSearch={false}
        showNotifications={true}
        headerText={'Topics'}
        navigation={navigation}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={style.searchBar}
        onPress={() => navigation.navigate('Search')}>
        <Text>Explore New Topics</Text>
      </TouchableOpacity>
      <View style={{flex: 8.2}}>
        <View
          style={[styles.padding2Percent, styles.paddingHorizontal4Percent]}>
          <Text style={style.heading}>Topics I'm Following :</Text>
        </View>
        <TopicCard name={'Technology'} />
        <TopicCard name={'Start Ups'} />
        <TopicCard name={'Current Affairs'} />
        <TopicCard name={'Education Related News'} />
      </View>
      <View style={{flex: 1.8}}>
        <View style={styles.paddingHorizontal4Percent}>
          <Text style={style.subHeading}>Tags I'm Following :</Text>
        </View>
        <View
          style={[
            styles.directionRow,
            styles.flexWrap,
            styles.justifyCenter,
            styles.paddingHorizontal1Percent,
          ]}>
          <TouchableOpacity
            style={[
              styles.margin1Percent,
              style.selectionButton,
              style.selectedButton,
            ]}>
            <Text style={[style.selectionButtonText, styles.colorWhite]}>
              @NEET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.selectionButton, styles.margin1Percent]}>
            <Text style={style.selectionButtonText}>@JEE MAIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.selectionButton, styles.margin1Percent]}>
            <Text style={style.selectionButtonText}>@CS FOUNDATION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.selectionButton, styles.margin1Percent]}>
            <Text style={style.selectionButtonText}>@SSC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Topic;

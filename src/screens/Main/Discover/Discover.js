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
import Product from '../../../components/Product';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Discover = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('Services');

  const selectTab = item => {
    setSelectedTab(item);
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        leftIcon={'ios-grid'}
        showSearch={false}
        showNotifications={true}
        headerText={'Discover'}
        navigation={navigation}
      />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.9}
          style={style.searchBar}
          onPress={() => navigation.navigate('Search')}>
          <Text>Search</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            styles.margin4Percent,
          ]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              selectTab('Services');
            }}
            style={
              selectedTab === 'Services'
                ? [style.categoryButton, style.activeCategoryButton]
                : [style.categoryButton]
            }>
            <Text
              style={
                selectedTab === 'Services'
                  ? [style.catgoryTitle, style.activeCatgoryTitle]
                  : [style.catgoryTitle]
              }>
              Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              selectTab('Products');
            }}
            style={
              selectedTab === 'Products'
                ? [style.categoryButton, style.activeCategoryButton]
                : [style.categoryButton]
            }>
            <Text
              style={
                selectedTab === 'Products'
                  ? [style.catgoryTitle, style.activeCatgoryTitle]
                  : [style.catgoryTitle]
              }>
              Products
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              selectTab('Counselling');
            }}
            style={
              selectedTab === 'Counselling'
                ? [style.categoryButton, style.activeCategoryButton]
                : [style.categoryButton]
            }>
            <Text
              style={
                selectedTab === 'Counselling'
                  ? [style.catgoryTitle, style.activeCatgoryTitle]
                  : [style.catgoryTitle]
              }>
              Counselling
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.directionRow,
            selectedTab === 'Counselling'
              ? styles.justifySpaceBetween
              : styles.justifyEnd,
            styles.margin3Percent,
            {marginRight: WP('4%')},
          ]}>
          {selectedTab === 'Counselling' && (
            <TouchableOpacity activeOpacity={0.9} style={style.quizBtn}>
              <Text style={style.subHeading}>TAKE QUIZ</Text>
            </TouchableOpacity>
          )}
          <View style={styles.directionRow}>
            <Text style={style.normalText}>Sort By: </Text>
            <View
              style={[
                style.filterSelection,
                styles.w_25,
                styles.directionRow,
                styles.justifySpaceBetween,
              ]}>
              <Text style={style.filterText}>Latest</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[style.chevoronBg, styles.alignCenter]}>
                <AntDesign name={'down'} size={13} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {selectedTab === 'Services' ? (
          <>
            <Product />
            <Product />
            <Product />
            <Product />
          </>
        ) : selectedTab === 'Products' ? (
          <>
            <Product />
            <Product />
            <Product />
            <Product />
          </>
        ) : selectedTab === 'Counselling' ? (
          <>
            <Product />
            <Product />
            <Product />
            <Product />
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Discover;

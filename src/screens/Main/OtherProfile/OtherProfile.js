import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderMain from '../../../components/HeaderMain';
import Image from '../../../components/Img';
import Post from '../../../components/Post';
import Product from '../../../components/Product';
import {appImages} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const OtherProfile = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('My Posts');

  const selectTab = item => {
    setSelectedTab(item);
  };
  const navgateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={true}
        headerText={'OTHER PROFILE'}
        navigation={navigation}
        navigateLeftIcon={navgateBack}
      />
      <ScrollView>
        <Card containerStyle={{marginHorizontal: 0, overflow: 'hidden'}}>
          <View style={[styles.directionRow]}>
            <View style={{flex: 2.4}}>
              <Image
                local={true}
                resizeMode={'contain'}
                style={style.postImage}
                src={appImages?.postImage}
              />
            </View>
            <View style={{flex: 7.6}}>
              <View
                style={[
                  styles.directionRow,
                  styles.justifySpaceAround,
                  styles.margin1Percent,
                ]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[styles.alignCenter]}>
                  <Text style={[style.normalText, styles.fontBold]}>1,201</Text>
                  <Text style={[style.normalText, styles.fontBold]}>Post</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Followers');
                  }}
                  activeOpacity={0.9}
                  style={[styles.alignCenter]}>
                  <Text style={[style.normalText, styles.fontBold]}>1,201</Text>
                  <Text style={[style.normalText, styles.fontBold]}>
                    Followers
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Following');
                  }}
                  activeOpacity={0.9}
                  style={[styles.alignCenter]}>
                  <Text style={[style.normalText, styles.fontBold]}>1,201</Text>
                  <Text style={[style.normalText, styles.fontBold]}>
                    Following
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text
            numberOfLines={1}
            style={[style.heading, styles.fontBold, styles.margin1Percent]}>
            John Smith
          </Text>
          <Text numberOfLines={2} style={style.subHeading}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
          </Text>
          <View
            style={[
              styles.margin2Percent,
              styles.directionRow,
              styles.justifyStart,
            ]}>
            <TouchableOpacity activeOpacity={0.9} style={style.followButton}>
              <Text style={style.activeCatgoryTitle}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={style.messageButton}>
              <Text>Message</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <View
          style={[
            styles.directionRow,
            styles.justifySpaceBetween,
            styles.margin4Percent,
          ]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              selectTab('My Posts');
            }}
            style={
              selectedTab === 'My Posts'
                ? [style.categoryButton, style.activeCategoryButton]
                : [style.categoryButton]
            }>
            <Text
              style={
                selectedTab === 'My Posts'
                  ? [style.catgoryTitle, style.activeCatgoryTitle]
                  : [style.catgoryTitle]
              }>
              My Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              selectTab('My Services');
            }}
            style={
              selectedTab === 'My Services'
                ? [style.categoryButton, style.activeCategoryButton]
                : [style.categoryButton]
            }>
            <Text
              style={
                selectedTab === 'My Services'
                  ? [style.catgoryTitle, style.activeCatgoryTitle]
                  : [style.catgoryTitle]
              }>
              My Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              selectTab('My Products');
            }}
            style={
              selectedTab === 'My Products'
                ? [style.categoryButton, style.activeCategoryButton]
                : [style.categoryButton]
            }>
            <Text
              style={
                selectedTab === 'My Products'
                  ? [style.catgoryTitle, style.activeCatgoryTitle]
                  : [style.catgoryTitle]
              }>
              My Products
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 'My Posts' ? (
          <>
            <Post
              showPostImage={false}
              showTag={true}
              navigation={navigation}
            />
            <Post
              showPostImage={true}
              showTag={false}
              navigation={navigation}
            />
          </>
        ) : selectedTab === 'My Services' ? (
          <>
            <Product navigation={navigation} name={'Services'} id={0} />
            <Product navigation={navigation} name={'Services'} id={1} />
            <Product navigation={navigation} name={'Services'} id={2} />
          </>
        ) : selectedTab === 'My Products' ? (
          <>
            <Product navigation={navigation} name={'Products'} id={0} />
            <Product navigation={navigation} name={'Products'} id={1} />
            <Product navigation={navigation} name={'Products'} id={2} />
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default OtherProfile;

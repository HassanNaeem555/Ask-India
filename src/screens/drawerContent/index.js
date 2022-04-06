import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Img from '../../components/Img';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {validateUserLogin} from '../../store/actions/authAction';
import {colors, WP, HP, size} from '../../utilities';
import {appImages, appIcons} from '../../assets';
import styles from '../Main/style';

export default function DrawerContent({navigation}) {
  console.log('drawer Navigation');
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(validateUserLogin());
    // navigate('Pin');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={[style.header, styles.justifyCenter, styles.alignCenter]}>
        <View
          style={[
            styles.margin1Percent,
            styles.justifyCenter,
            styles.alignCenter,
          ]}>
          <Image source={appImages.profileImage} style={style.profileImage} />
          <Text style={[style.name, styles.margin1Percent]}>JOHN SMITH</Text>
          <Text style={style.email}>johnsmith@gmail.com</Text>
        </View>
      </View>
      <View style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={style.itemContainer}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={{
                width: WP('5%'),
                height: HP('5%'),
              }}
              src={appIcons?.home}
            />
            <Text style={[style.itemText, styles.margin1Percent]}>
              {'\b \b \b'}Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...style.itemContainer,
            }}
            onPress={() => navigation.navigate('UsersForChat')}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={{
                width: WP('5%'),
                height: HP('5%'),
              }}
              src={appIcons?.messages}
            />
            <Text style={[style.itemText, styles.margin1Percent]}>
              {'\b \b \b'}
              Messages
            </Text>
          </TouchableOpacity>
          <View style={style.itemContainer}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={{
                width: WP('5%'),
                height: HP('5%'),
              }}
              src={appIcons?.settings}
            />
            <Text style={[style.itemText, styles.margin1Percent]}>
              {'\b \b \b'}
              Settings
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.primarySecondaryMix,
              marginLeft: WP('5%'),
            }}>
            <TouchableOpacity
              style={style.itemContainer}
              onPress={() => navigation.navigate('TermsCondition')}>
              <Img
                local={true}
                resizeMode={'contain'}
                style={{
                  width: WP('5%'),
                  height: HP('5%'),
                }}
                src={appIcons?.termsCondition}
              />
              <Text style={[style.itemText, styles.margin1Percent]}>
                {'\b \b \b'}
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.itemContainer}
              onPress={() => navigation.navigate('PrivacyPolicy')}>
              <Img
                local={true}
                resizeMode={'contain'}
                style={{
                  width: WP('5%'),
                  height: HP('5%'),
                }}
                src={appIcons?.privacyPolicy}
              />
              <Text style={[style.itemText, styles.margin1Percent]}>
                {'\b \b \b'}
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.itemContainer}
              onPress={() => navigation.navigate('ChangePassword')}>
              <Img
                local={true}
                resizeMode={'contain'}
                style={{
                  width: WP('5%'),
                  height: HP('5%'),
                }}
                src={appIcons?.changePassword}
              />
              <Text style={[style.itemText, styles.margin1Percent]}>
                {'\b \b \b'}
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              ...style.itemContainer,
            }}
            onPress={() => logOut()}>
            <Img
              local={true}
              resizeMode={'contain'}
              style={{
                width: WP('5%'),
                height: HP('5%'),
              }}
              src={appIcons?.logOut}
            />
            <Text style={[style.itemText, styles.margin1Percent]}>
              {'\b \b \b'}
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 6.5,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 3.5,
    backgroundColor: colors.white,
  },
  profileImage: {
    width: WP('24%'),
    height: HP('14%'),
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 50,
  },
  name: {
    fontSize: size.medium,
    fontWeight: '400',
  },
  email: {
    fontSize: size.tiny,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: HP('1.3%'),
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: size.large,
    color: colors.white,
    width: WP('60%'),
  },
  icon: {
    width: 22,
    height: 22,
  },
});

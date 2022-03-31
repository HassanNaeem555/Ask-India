import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, WP, HP, size} from '../../utilities';
import {appImages} from '../../assets';
import styles from '../Main/style';

export default function DrawerContent({navigation}) {
  console.log('drawer Navigation');
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
            <Text style={style.itemText}>
              <Entypo name={'home'} size={size.h4} color={colors.white} />
              {'\b \b \b'}
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...style.itemContainer,
            }}
            onPress={() => navigation.navigate('ContactUs')}>
            <Text style={style.itemText}>
              <Entypo name={'chat'} size={size.h4} color={colors.white} />
              {'\b \b \b'}
              Messages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.itemContainer}
            onPress={() => navigation.navigate('Faq')}>
            <Text style={style.itemText}>
              <Ionicons name={'settings'} size={size.h4} color={colors.white} />
              {'\b \b \b'}
              Settings
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: colors.primarySecondaryMix,
              marginLeft: WP('5%'),
            }}>
            <TouchableOpacity
              style={style.itemContainer}
              onPress={() => navigation.navigate('TermsAndConditions')}>
              <Text style={style.itemText}>
                <AntDesign name={'flag'} size={19} color={colors.primary} />
                {'\b \b \b'}
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.itemContainer}
              onPress={() => navigation.navigate('TermsAndConditions')}>
              <Text style={style.itemText}>
                <AntDesign name={'flag'} size={19} color={colors.primary} />
                {'\b \b \b'}
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.itemContainer}
              onPress={() => navigation.navigate('TermsAndConditions')}>
              <Text style={style.itemText}>
                <AntDesign name={'flag'} size={19} color={colors.primary} />
                {'\b \b \b'}
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.itemContainer}
            onPress={() => navigation.navigate('Faq')}>
            <Text style={style.itemText}>
              <Ionicons
                name={'log-out-sharp'}
                size={size.h4}
                color={colors.white}
              />
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
    flex: 6,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 4,
    backgroundColor: colors.white,
  },
  profileImage: {
    width: WP('26%'),
    height: HP('15%'),
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
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: size.normal,
    color: colors.white,
    width: WP('60%'),
  },
  icon: {
    width: 22,
    height: 22,
  },
});

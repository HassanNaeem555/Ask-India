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
import {colors, WP, HP} from '../../utilities';
import {appImages} from '../../assets';
import styles from '../Main/style';

export default function DrawerContent({navigation}) {
  console.log('drawer Navigation');
  return (
    <>
      <View style={[style.header, styles.justifyCenter, styles.alignCenter]}>
        <View style={styles.margin1Percent}>
          <Image source={appImages.profileImage} style={style.profileImage} />
          <Text style={style.name}>JOHN SMITH</Text>
          <Text style={style.email}>johnsmith@gmail.com</Text>
        </View>
      </View>
      <View style={style.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={style.itemContainer}
          onPress={() => {
            navigation.navigate('Home');
            navigation.closeDrawer();
          }}>
          <Text style={style.itemText}>
            <AntDesign name={'home'} size={19} color={colors.primary} />
            {'\b \b \b'}
            Home
          </Text>
        </TouchableOpacity>
        {/* {isLogin && (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('UserProfile')}>
            <Text style={styles.itemText}>
              <AntDesign name={'user'} size={19} color={colors.primary} />
              {'\b \b \b'}
              Profile
            </Text>
          </TouchableOpacity>
        )} */}
        <TouchableOpacity
          style={{
            ...style.itemContainer,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGray,
          }}
          onPress={() => navigation.navigate('ContactUs')}>
          <Text style={style.itemText}>
            <AntDesign name={'contacts'} size={19} color={colors.primary} />
            {'\b \b \b'}
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.itemContainer}
          onPress={() => navigation.navigate('Faq')}>
          <Text style={style.itemText}>
            <AntDesign
              name={'questioncircleo'}
              size={19}
              color={colors.primary}
            />
            {'\b \b \b'}
            FAQ's
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.itemContainer}
          onPress={() => navigation.navigate('TermsAndConditions')}>
          <Text style={style.itemText}>
            <AntDesign name={'flag'} size={19} color={colors.primary} />
            {'\b \b \b'}
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </>
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
    fontSize: 16,
    fontWeight: '700',
  },
  email: {
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: 16,
    color: colors.gray,
    width: WP('60%'),
  },
  icon: {
    width: 22,
    height: 22,
  },
});

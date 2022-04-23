import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import Img from '../../components/Img';
import { validateUserLogOut } from '../../store/actions/authAction';
import { colors, WP, HP, size } from '../../utilities';
import { appImages, appIcons } from '../../assets';
import { getApi } from '../../services/apiFunction';
import { image_url } from '../../services/url';
import { logOut } from '../../services/api';
import styles from '../Main/style';

export default function DrawerContent({ navigation }) {
  console.log('drawer Navigation');
  const dispatch = useDispatch();
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const user_profile_data = useSelector(state => state.authReducer.user);
  const social_user_profile_data = useSelector(
    state => state.authReducer.user_social,
  );
  const logOutUser = async () => {
    const { status, message } = await getApi(
      `${logOut}?user_id=${user_profile_data?.user_id}`,
      bearer_token,
    );
    if (status == 1) {
      dispatch(validateUserLogOut());
      Toast.show(message, Toast.LONG);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const handleNavigate = () => {
    navigation.closeDrawer();
    navigation.navigate('ProfileStack');
  };
  console.log('user_profile_data', user_profile_data, 'navigation', navigation);
  return (
    <View style={styles.mainContainer}>
      <View style={[style.header, styles.justifyCenter, styles.alignCenter]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleNavigate}
          style={[
            styles.margin1Percent,
            styles.justifyCenter,
            styles.alignCenter,
          ]}>
          <Img
            local={true}
            resizeMode={'cover'}
            style={style.profileImage}
            src={
              user_profile_data?.user_image !== null
                ? { uri: image_url + user_profile_data?.user_image }
                : appImages?.profileImageRound
            }
          />
          <Text style={[style.name, styles.margin1Percent]}>
            {user_profile_data?.user_name && user_profile_data?.user_name}
          </Text>
          <Text style={style.email}>
            {user_profile_data?.user_email && user_profile_data?.user_email}
          </Text>
        </TouchableOpacity>
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
            {social_user_profile_data == null && (
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
            )}
          </View>
          <TouchableOpacity
            style={{
              ...style.itemContainer,
            }}
            onPress={() => logOutUser()}>
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
    alignSelf: 'center',
    height: 170,
    width: 170,
    borderRadius: 1000,
    borderWidth: 5,
    borderColor: colors.primary,
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
    fontSize: size.medium,
    color: colors.white,
    width: WP('60%'),
  },
  icon: {
    width: 22,
    height: 22,
  },
});

import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import HeaderMain from '../../../components/HeaderMain';
import CustomInput from '../../../components/CustomInput';
import FollowersCard from '../../../components/FollowersCard';
import {getApi} from '../../../utils/apiFunction';
import {listUserFollowUnFollow} from '../../../utils/api';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Followers = ({navigation}) => {
  const [followerList, setFollowerList] = useState([]);
  const [preFabText, setPreFabText] = useState('');
  const [loading, setLoading] = useState(true);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const handlePress = () => {
    console.log('press');
  };
  const getUserFollower = async () => {
    if (!loading) setLoading(!loading);
    const {data, message, status} = await getApi(
      `${listUserFollowUnFollow}?type=follower`,
      bearer_token,
    );
    if (status == 1) {
      console.log('data', data);
      setFollowerList(data);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
      setPreFabText(message);
    }
    setLoading(false);
  };
  const headerComponent = () => {
    return (
      <CustomInput
        placeholder={'Search'}
        iconNameRight={'search'}
        iconType={'Ionicons'}
        rightIconShow={true}
        rightIconSize={25}
        rightIconColor={colors.black}
        handlePress={handlePress}
      />
    );
  };
  const emptyComponent = () => {
    return (
      <View
        style={[
          styles.justifyCenter,
          styles.alignCenter,
          {marginTop: HP('30%')},
        ]}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={{
              fontSize: size.small,
              fontWeight: 'bold',
            }}
          />
        ) : (
          <Text style={style.normalText}>{preFabText}</Text>
        )}
      </View>
    );
  };
  const renderItem = ({item}) => {
    return <FollowersCard data={item} navigation={navigation} />;
  };
  useEffect(() => {
    getUserFollower();
  }, []);
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'FOLLOWERS'}
        navigation={navigation}
      />
      <FlatList
        data={followerList}
        ListHeaderComponent={headerComponent}
        ListEmptyComponent={emptyComponent}
        renderItem={renderItem}
        keyExtractor={item => item?.user_id + 1}
      />
    </View>
  );
};

export default Followers;

import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import HeaderMain from '../../../../components/HeaderMain';
import {getApi} from '../../../../services/apiFunction';
import {cmsContent} from '../../../../services/api';
import styles from '../../style';
import style from './styles';

const PrivacyPolicy = ({navigation}) => {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);
  const getCmsContent = async () => {
    const {status, message, data} = await getApi(`${cmsContent}?type=pp`);
    if (status == 1) {
      setPrivacyPolicy(data);
    } else {
      Toast.show(message, Toast.LONG);
    }
  };
  useEffect(() => {
    getCmsContent();
  }, []);
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'Privacy Policy'}
        navigation={navigation}
      />
      <ScrollView>
        <Text style={style.normalText}>{privacyPolicy?.content_content}</Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;

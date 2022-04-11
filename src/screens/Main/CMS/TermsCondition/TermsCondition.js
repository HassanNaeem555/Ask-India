import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Toast from 'react-native-simple-toast';
import HeaderMain from '../../../../components/HeaderMain';
import {getApi} from '../../../../utils/apiFunction';
import {cmsContent} from '../../../../utils/api';
import styles from '../../style';
import style from './styles';

const TermsCondition = ({navigation}) => {
  const [termsCondition, setTermsCondition] = useState(null);
  const getCmsContent = async () => {
    const {status, message, data} = await getApi(`${cmsContent}?type=tc`);
    if (status == 1) {
      setTermsCondition(data);
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
        headerText={'Terms Condition'}
        navigation={navigation}
      />
      <ScrollView>
        <Text style={style.normalText}>{termsCondition?.content_content}</Text>
      </ScrollView>
    </View>
  );
};

export default TermsCondition;

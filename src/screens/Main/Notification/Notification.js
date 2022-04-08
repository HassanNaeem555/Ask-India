import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import NotificationCard from '../../../components/NotificationCard';
import styles from '../style';
import style from './styles';

const Notification = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={true}
        headerText={'NOTIFICATIONS'}
        navigation={navigation}
      />
      <ScrollView style={[styles.marginHorizontal2Percent]}>
        <Text style={style.when}>New</Text>
        <NotificationCard
          which={'like'}
          what={'Like your photo'}
          navigation={navigation}
        />
        <NotificationCard
          which={'comment'}
          what={'Comment on your Post'}
          navigation={navigation}
        />
        <NotificationCard
          which={'share'}
          what={'Share your Post'}
          navigation={navigation}
        />
        <Text style={style.when}>Today</Text>
        <NotificationCard
          which={'like'}
          what={'Like your post'}
          navigation={navigation}
        />
        <Text style={style.when}>This Month</Text>
        <NotificationCard
          which={'comment'}
          what={'Comment on your Post'}
          navigation={navigation}
        />
        <NotificationCard
          which={'share'}
          what={'Share your Post'}
          navigation={navigation}
        />
        <NotificationCard
          which={'like'}
          what={'Like your post'}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default Notification;

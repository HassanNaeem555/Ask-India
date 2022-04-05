import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import HeaderMain from '../../../components/HeaderMain';
import TopicCard from '../../../components/TopicCard';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Topic = ({navigation}) => {
  const handlePress = () => {
    console.log('search');
  };
  const drawerOpen = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        leftIcon={'ios-menu-sharp'}
        showSearch={true}
        showNotifications={true}
        headerText={'TOPICS'}
        navigation={navigation}
        navigateLeftIcon={drawerOpen}
      />
      <ScrollView>
        <CustomInput
          placeholder={'Explore New Topics'}
          iconNameRight={'search'}
          iconType={'Ionicons'}
          rightIconShow={true}
          rightIconSize={25}
          rightIconColor={colors.black}
          handlePress={handlePress}
        />
        <Text
          style={[
            styles.paddingHalfPercent,
            styles.paddingHorizontal4Percent,
            style.heading,
          ]}>
          Topics I'm Following :
        </Text>
        <TopicCard name={'Technology'} image={true} navigation={navigation} />
        <TopicCard name={'Start Ups'} image={true} navigation={navigation} />
        <TopicCard
          name={'Current Affairs'}
          image={true}
          navigation={navigation}
        />
        <TopicCard
          name={'Education Related News'}
          image={true}
          navigation={navigation}
        />
        <TopicCard
          name={'Crypto Currency'}
          image={true}
          navigation={navigation}
        />
        <TopicCard
          name={'Online Market'}
          image={true}
          navigation={navigation}
        />
        <TopicCard name={'Start Ups'} image={true} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Topic;

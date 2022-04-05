import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import HeaderMain from '../../../components/HeaderMain';
import QACard from '../../../components/QACard';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const QA = ({navigation}) => {
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
        headerText={'Q & A'}
        navigation={navigation}
        navigateLeftIcon={drawerOpen}
      />
      <ScrollView>
        <CustomInput
          placeholder={'Search'}
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
          Select Topic :
        </Text>
        <QACard
          name={'Lorem ipsum dolor sit ammet'}
          image={false}
          navigation={navigation}
        />
        <QACard
          name={'Lorem ipsum dolor sit ammet'}
          image={false}
          navigation={navigation}
        />
        <QACard
          name={'Lorem ipsum dolor sit ammet'}
          image={false}
          navigation={navigation}
        />
        <QACard
          name={'Lorem ipsum dolor sit ammet'}
          image={false}
          navigation={navigation}
        />
        <QACard
          name={'Lorem ipsum dolor sit ammet'}
          image={false}
          navigation={navigation}
        />
        <QACard
          name={'Lorem ipsum dolor sit ammet'}
          image={false}
          navigation={navigation}
        />
        <QACard
          name={'Lorem ipsum dolor sit ammet'}
          image={false}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default QA;

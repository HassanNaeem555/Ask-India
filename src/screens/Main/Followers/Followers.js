import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import LikeCard from '../../../components/LikeCard';
import CustomInput from '../../../components/CustomInput';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Followers = ({navigation}) => {
  const handlePress = () => {
    console.log('press');
  };
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
        <LikeCard followed={true} navigation={navigation} like={false} />
        <LikeCard followed={true} navigation={navigation} like={false} />
        <LikeCard followed={false} navigation={navigation} like={false} />
        <LikeCard followed={true} navigation={navigation} like={false} />
        <LikeCard followed={true} navigation={navigation} like={false} />
        <LikeCard followed={false} navigation={navigation} like={false} />
      </ScrollView>
    </View>
  );
};

export default Followers;

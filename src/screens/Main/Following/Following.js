import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderMain from '../../../components/HeaderMain';
import CustomInput from '../../../components/CustomInput';
import LikeCard from '../../../components/LikeCard';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const Following = ({navigation}) => {
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
        headerText={'FOLLOWING'}
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
        <LikeCard followed={true} navigation={navigation} />
        <LikeCard followed={true} navigation={navigation} />
        <LikeCard followed={false} navigation={navigation} />
        <LikeCard followed={true} navigation={navigation} />
        <LikeCard followed={true} navigation={navigation} />
        <LikeCard followed={false} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Following;

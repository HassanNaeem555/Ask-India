import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LikeCard from '../../../../components/LikeCard';
import HeaderMain from '../../../../components/HeaderMain';
import {WP, HP, colors, size} from '../../../../utilities';
import styles from '../../style';
import style from './styles';

const Like = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'ios-caret-back-outline'}
        showSearch={true}
        showNotifications={false}
        headerText={'People Who Like'}
        navigation={navigation}
      />
      <LikeCard />
      <LikeCard />
      <LikeCard />
      <LikeCard />
      <LikeCard />
      <LikeCard />
    </View>
  );
};

export default Like;

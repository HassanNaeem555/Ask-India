import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HeaderMain from '../../../../components/HeaderMain';
import {WP, HP, colors, size} from '../../../../utilities';
import styles from '../../style';
import style from './styles';

const Comment = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.goBack}
        leftIcon={'ios-caret-back-outline'}
        showSearch={true}
        showNotifications={false}
        headerText={'Comments'}
        navigation={navigation}
      />
    </View>
  );
};

export default Comment;

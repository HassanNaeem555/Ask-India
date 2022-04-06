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
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={true}
        showNotifications={false}
        headerText={'LIKES'}
        navigation={navigation}
      />
      <ScrollView>
        <LikeCard followed={true} navigation={navigation} like={true} />
        <LikeCard followed={true} navigation={navigation} like={true} />
        <LikeCard followed={false} navigation={navigation} like={true} />
        <LikeCard followed={true} navigation={navigation} like={true} />
        <LikeCard followed={true} navigation={navigation} like={true} />
        <LikeCard followed={false} navigation={navigation} like={true} />
      </ScrollView>
    </View>
  );
};

export default Like;

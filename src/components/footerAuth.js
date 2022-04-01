import React from 'react';
import {Text} from 'react-native';
import styles from '../screens/Auth/style';

export default function footerAuth({mainText, where, navigation, screen_name}) {
  return (
    <Text style={[styles.footerText, styles.marginVerticle4Percent]}>
      {mainText}{' '}
      <Text
        style={[styles.footerTextAuth, styles.colorPrimary]}
        onPress={() => navigation.navigate(screen_name)}>
        {where}
      </Text>
    </Text>
  );
}

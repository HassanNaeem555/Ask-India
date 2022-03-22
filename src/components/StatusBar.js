import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';
import {appLogos} from '../assets';
import Img from './Img';
import {colors, platform} from '../utilities';
import {translate} from '../i18n';

let ios = platform === 'ios';

const StatusBarHeader = () => {
  return (
    <View style={styles.StatusBarContainer}>
      <Img
        local={true}
        resizeMode={'contain'}
        style={[styles.spLogoSize, !ios && styles.center]}
        tintColor={colors.white}
        src={appLogos.appIcon}
      />
      <Text style={styles.statusBarText}>{translate('bistrochatManager')}</Text>
    </View>
  );
};

export default StatusBarHeader;

import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../utilities/index';

const Loader = ({visible}) => {
  return (
    <>
      {visible && (
        <View style={styles.view}>
          <View style={styles.wrapper}>
            <ActivityIndicator size={'large'} color={colors?.white} />
          </View>
        </View>
      )}
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

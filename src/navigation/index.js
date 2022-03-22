// @app
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
// @firebase
// @navigations
import AuthNavigation from '../navigation/authNavigation';
import AppNavigation from '../navigation/appNavigation';
import {useSelector} from 'react-redux';
import {_AppLayout} from '../store/actions';
// @components
import {colors} from '../utilities';

const navigation = () => {
  // Set an initializing state whilst Firebase connects
  const userValidate = useSelector(state => state.authReducer.isUserLogin);

  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: 'rgba(206,21,127,0)'}}>
        <StatusBar
          backgroundColor={colors.primary}
          barStyle={'light-content'}
        />
        {userValidate ? <AppNavigation /> : <AuthNavigation />}
      </View>
    </NavigationContainer>
  );
};

export default navigation;

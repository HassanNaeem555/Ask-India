// @app
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// @stack screens

import {BottomTabs} from './tabs/BottomTabs';

const RootStack = createStackNavigator();

const navigation = ({}) => {
  return (
    <RootStack.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <RootStack.Screen name={'App'} component={BottomTabs} />
    </RootStack.Navigator>
  );
};

export default navigation;

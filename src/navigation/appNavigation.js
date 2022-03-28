// @app
import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// @stack screens

import {BottomTabs} from './tabs/BottomTabs';
import Notification from '../screens/Main/Notification';
import EditProfile from '../screens/Main/EditProfile';
import ProductDetail from '../screens/Main/ProductDetail';

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
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Notification"
        component={Notification}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="EditProfile"
        component={EditProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </RootStack.Navigator>
  );
};

export default navigation;

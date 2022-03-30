// @app
import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// @stack screens
import MyDrawer from '../navigation/drawer/sideDrawer';
import {BottomTabs} from './tabs/BottomTabs';
import Notification from '../screens/Main/Notification';
import EditProfile from '../screens/Main/EditProfile';
import ProductDetail from '../screens/Main/ProductDetail';
import OtherProfile from '../screens/Main/OtherProfile';
import Followers from '../screens/Main/Followers';
import Following from '../screens/Main/Following';

const RootStack = createStackNavigator();

const navigation = ({}) => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name={'Home'}
        component={MyDrawer}
      />
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
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="OtherProfile"
        component={OtherProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Followers"
        component={Followers}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Following"
        component={Following}
      />
    </RootStack.Navigator>
  );
};

export default navigation;

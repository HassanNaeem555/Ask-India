// @app
// import * as React from 'react';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// @stack screens
import SelectAuth from '../screens/Auth/SelectAuth';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/SignUp';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Agreement from '../screens/Auth/Agreement';
import MobileNumber from '../screens/Auth/MobileNumber';
import OTP from '../screens/Auth/OTP';
import Continue from '../screens/Auth/Continue';
import CreateProfile from '../screens/Auth/CreateProfile';
import PlaceLocation from '../screens/Auth/PlaceLocation';
import {useNavigation} from '@react-navigation/native';

const RootStack = createStackNavigator();

const navigation = ({initialRoute}) => {
  const navigations = useNavigation();
  return (
    <RootStack.Navigator
      initialRouteName={'SelectAuth'}
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
        name="SelectAuth"
        component={SelectAuth}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Login"
        component={Login}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Signup"
        component={Signup}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Agreement"
        component={Agreement}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="MobileNumber"
        component={MobileNumber}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="OTP"
        component={OTP}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Continue"
        component={Continue}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="CreateProfile"
        component={CreateProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="PlaceLocation"
        component={PlaceLocation}
      />
    </RootStack.Navigator>
  );
};

export default navigation;

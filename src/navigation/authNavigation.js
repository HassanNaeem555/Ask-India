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
import {useNavigation} from '@react-navigation/native';

const RootStack = createStackNavigator();

const navigation = ({initialRoute}) => {
  // const [AddMobRoute, setAddMobRoute] = useState<boolean>(false);
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
    </RootStack.Navigator>
  );
};

export default navigation;

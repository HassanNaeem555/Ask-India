import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HP, colors, platform} from '../../utilities';
import HomeStack from '../stacks/HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import style from '../style';

const {tabBarLabelStyle, tabBarStyle, tabScreen} = style;

const Tab = createBottomTabNavigator();

let ios = platform === 'ios';

export const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarLabelStyle: [tabBarLabelStyle, {marginBottom: 15}],
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.white,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: [tabBarStyle, {height: 50}],
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={50} style={{color: color}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

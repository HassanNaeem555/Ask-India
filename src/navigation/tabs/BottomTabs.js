import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HP, colors, platform} from '../../utilities';
import TabBarComponent from '../../components/TabBarComponent';
import FeedStack from '../stacks/FeedStack';
import TopicStack from '../stacks/TopicsStack';
import ProfileStack from '../stacks/ProfileStack';
import QAStack from '../stacks/QAStacks';
import DiscoverStack from '../stacks/DiscoverStack';
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
      initialRouteName="FeedStack"
      tabBar={props => <TabBarComponent {...props} />}
      screenOptions={{
        tabBarLabelStyle: [tabBarLabelStyle, {marginBottom: 15}],
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.white,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: [tabBarStyle, {height: 50, elevation: 7}],
        tabBarStyle: [tabBarStyle, {height: 500, backgroundColor: 'blue'}],
      }}>
      <Tab.Screen
        name="FeedStack"
        component={FeedStack}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={50} style={{color: 'blue'}} />
          ),
        }}
      />
      <Tab.Screen
        name="TopicStack"
        component={TopicStack}
        options={{
          tabBarLabel: 'Topic',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={50} style={{color: 'blue'}} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={50} style={{color: 'blue'}} />
          ),
        }}
      />
      <Tab.Screen
        name="QAStack"
        component={QAStack}
        options={{
          tabBarLabel: 'QA',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={50} style={{color: 'blue'}} />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverStack"
        component={DiscoverStack}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={50} style={{color: 'blue'}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

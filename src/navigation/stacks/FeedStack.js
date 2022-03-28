import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Feed from '../../screens/Main/Feed';
import Search from '../../screens/Main/Search';
import Like from '../../screens/Main/PostAssets/Like';
import Comment from '../../screens/Main/PostAssets/Comment';

const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Like"
        component={Like}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;

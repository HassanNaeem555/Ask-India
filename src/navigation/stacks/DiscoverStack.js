import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Discover from '../../screens/Main/Discover';

const Stack = createStackNavigator();

function DiscoverStack() {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default DiscoverStack;

import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Topic from '../../screens/Main/Topic';

const Stack = createStackNavigator();

function QAStack() {
  return (
    <Stack.Navigator
      initialRouteName="Topic"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Topic"
        component={Topic}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default QAStack;

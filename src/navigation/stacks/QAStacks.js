import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import QA from '../../screens/Main/QA';

const Stack = createStackNavigator();

function QAStack() {
  return (
    <Stack.Navigator initialRouteName="QA" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="QA"
        component={QA}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default QAStack;

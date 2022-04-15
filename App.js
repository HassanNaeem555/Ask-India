import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Settings} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import {LogBox, View, SafeAreaView, Platform} from 'react-native';
import store, {persistor} from './src/store';
import MainNavigation from './src/navigation';
// ignore warnings
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
  useEffect(() => {
    Settings.setAppID('697142114809929');
    requestUserPermission();
    GoogleSignin.configure({
      webClientId:
        '992464212335-pj2914pgsigruaje3np58poal64pckme.apps.googleusercontent.com',
    });
  }, []);
  return (
    <Wrapper>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </Wrapper>
  );
};

function Wrapper({children}) {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
}

export default App;

// import random

// def generateRandomNumner():
//     random_number_tuple = (random.randint(0,9),random.randint(0,9));
//     return random_number_tuple;
// result_of_random_number = generateRandomNumner();
// computer_multiplication = result_of_random_number[0] * result_of_random_number[1];
// def takeUserInput(number):
//     user_input = input('How much is '+str(number[0])+' times '+str(number[1])+' ');
//     return user_input;
// user_input = takeUserInput(result_of_random_number);
// def result(userInput):
//     if(int(userInput) == computer_multiplication):
//         print('Very good!');
//     else:
//         print('No. Please try again.');
//         return True;
// getResult = result(user_input);
// if getResult:
//     takeUserInput(result_of_random_number);

// https://stackoverflow.com/questions/69408222/android-studio-generate-signed-apks-broke

// https://console.firebase.google.com/project/ask-india-96e1a/authentication/providers
// games.departnado@gmail.com
// Abcd@1234

import React from 'react';
import {Provider} from 'react-redux';
import {LogBox, View, KeyboardAvoidingView, Platform} from 'react-native';
import store from './src/store';
import MainNavigation from './src/navigation';

// ignore warnings
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </Wrapper>
  );
};

function Wrapper({children}) {
  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        // keyboardVerticalOffset={20}
      >
        {children}
      </KeyboardAvoidingView>
    );
  return <View style={{flex: 1}}>{children}</View>;
}

export default App;

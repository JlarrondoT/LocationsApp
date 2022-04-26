import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './navigator/MainStackNavigator';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

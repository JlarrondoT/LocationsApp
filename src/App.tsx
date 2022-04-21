import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './navigator/MainStackNavigator';
import store from './store/store';
import { init } from './sqlite/sql.connection';
import { NavigationContainer } from '@react-navigation/native';

init()
  .then(() => {
    console.log('DB initialized');
  })
  .catch((err) => {
    console.log('DB initialization failed', err);
  });

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

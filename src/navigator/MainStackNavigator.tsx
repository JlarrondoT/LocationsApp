import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../constants/color.constant';

import PlaceList from '../screens/place-list/PlaceList';
import PlaceDetail from '../screens/place-detail/PlaceDetail';
import NewPlace from '../screens/new-place/NewPlace.screen';
import HeaderButton from '../components/atoms/HeaderButton';
import { init } from '../sqlite/sql.connection';

const mainStack = createNativeStackNavigator();

const initDb = () => {
  console.log('entre al init db de afuera');
  init()
    .then(() => {
      console.log('DB initialized');
    })
    .catch((err) => {
      console.log('DB initialization failed', err);
    });
};

const MainStackNavigator = () => {
  initDb();
  return (
    <mainStack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <mainStack.Screen
        name="Place"
        component={PlaceList}
        options={({ navigation }) => ({
          title: 'Places',
          headerRight: () => <HeaderButton navigation={navigation} />,
        })}
      />
      <mainStack.Screen name="PlaceDetail" component={PlaceDetail} options={{ title: 'Place Details' }} />
      <mainStack.Screen name="NewPlace" component={NewPlace} options={{ title: 'New Place' }} />
    </mainStack.Navigator>
  );
};

export default MainStackNavigator;

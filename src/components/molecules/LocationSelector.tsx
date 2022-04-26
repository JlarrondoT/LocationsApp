import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { COLORS } from '../../constants/color.constant';
import Geolocation from '@react-native-community/geolocation';
import MapsPreview from '../../components/molecules/MapPreview';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';

const LocationSelector = (input: { onLocation: any; onMapLocation: any }) => {
  const [pickedLocation, setPickedLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  const route = useRoute();
  // @ts-ignore
  const mapLocation = route.params?.location;

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      input.onMapLocation(mapLocation);
    }
  }, [mapLocation]);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.warn(position);
        const { latitude, longitude } = position.coords;
        const location = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setPickedLocation(location);
        input.onLocation(location);
      },
      (error) => {
        console.warn('error', error);
        Alert.alert('Can not get location', 'Please try again later', [{ text: 'Okay' }]);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 3600000,
      }
    );
  };

  const pickLocation = () => {
    input.onMapLocation();
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapsPreview location={pickedLocation} style={styles.preview}>
          <Text>No location chosen yet!</Text>
        </MapsPreview>
      </View>
      <View style={styles.action}>
        <Button title="Get Location" color={COLORS.primaryColor} onPress={() => getLocation()} />
        <Button title="Pick Location in Maps" color={COLORS.primaryColor} onPress={() => pickLocation()} />
      </View>
    </View>
  );
};

export default LocationSelector;

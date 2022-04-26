import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/color.constant';
import { useDispatch } from 'react-redux';
import { PlacesAction } from '../../store/actions/places.action';
import ImageSelector from '../../components/molecules/ImageSelector';
import LocationSelector from '../../components/molecules/LocationSelector';

const NewPlace = (input: { navigation: any }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const handleNameChange = (text: string) => setName(text);
  const handleSavePlace = () => {
    const { latitude, longitude } = location;
    dispatch(PlacesAction.addPlace(name, image, latitude, longitude));
    input.navigation.navigate('Place');
  };
  const handleOnImage = (uri: string) => {
    setImage(uri);
  };

  const handleOnLocation = (location: any) => {
    setLocation(location);
  };

  const handleOnMapLocation = () => {
    input.navigation.navigate('Map', {
      location,
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <ImageSelector onImage={handleOnImage} />
        <LocationSelector onLocation={handleOnLocation} onMapLocation={handleOnMapLocation} />
        <TextInput style={styles.input} onChangeText={handleNameChange} value={name} />
        <Button title="Save place" onPress={() => handleSavePlace()} color={COLORS.primaryColor} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;

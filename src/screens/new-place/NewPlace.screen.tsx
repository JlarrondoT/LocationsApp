import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/color.constant';
import { useDispatch } from 'react-redux';
import PlacesAction from '../../store/actions/places.action';
import ImageSelector from '../../components/molecules/ImageSelector';

// @ts-ignore
const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = (text: string) => setName(text);
  const handleSavePlace = () => {
    dispatch(PlacesAction.addPlace(name, image, '123 street, city, country', ''));
    navigation.navigate('Place');
  };
  const handleOnImage = (uri: string) => {
    setImage(uri);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <ImageSelector onImage={handleOnImage} />
        <TextInput style={styles.input} onChangeText={handleNameChange} value={name} />
        <Button title="Save place" onPress={() => handleSavePlace()} color={COLORS.primaryColor} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;

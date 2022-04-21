import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// @ts-ignore
const PlaceItem = ({ name, address, onSelect, image, latitude, longitude }) => {
  return (
    <TouchableOpacity onPress={() => onSelect()} style={styles.containerPlaceItem}>
      <Image source={{ uri: image }} style={styles.imagePlaceItem} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.address}>{latitude}</Text>
        <Text style={styles.address}>{longitude}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

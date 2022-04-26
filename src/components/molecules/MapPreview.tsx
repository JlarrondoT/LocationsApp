import React from 'react';
import { View, Image } from 'react-native';
import { MAP_CONFIG } from '../../constants/map.constant';
import { styles } from './styles';

// @ts-ignore
const MapPreview = ({ location, style, children }) => {
  const mapPreviewUrl = location
    ? `${MAP_CONFIG.URL}/staticmap?center=${location.latitude},${location.longitude}&zoom=${MAP_CONFIG.ZOOM}&size=${MAP_CONFIG.SIZE}&maptype=${MAP_CONFIG.MAP_TYPE}&markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}&key=${MAP_CONFIG.API_KEY}`
    : '';

  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.image} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  );
};

export default MapPreview;

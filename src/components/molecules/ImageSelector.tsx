import React, { useState } from 'react';
import { Button, Image, Platform, Text, View } from 'react-native';
import { CameraOptions, launchCamera } from 'react-native-image-picker';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { COLORS } from '../../constants/color.constant';
import { styles } from './styles';

// @ts-ignore
const ImageSelector = ({ onImage }) => {
  const [pickedResponse, setPickedResponse] = useState<any | undefined>();
  const IS_IOS = Platform.OS === 'ios';

  const handleTakePicture = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    } as CameraOptions;

    let granted;

    if (IS_IOS) {
      granted = await request(PERMISSIONS.IOS.CAMERA);
    } else {
      granted = await request(PERMISSIONS.ANDROID.CAMERA);
    }

    if (granted === RESULTS.GRANTED) {
      await launchCamera(options, (response) => {
        if (!response.didCancel && !response.errorCode) {
          const arrayAssets = response.assets;
          if (arrayAssets) {
            setPickedResponse(arrayAssets[0]);
            onImage && onImage(arrayAssets[0].uri);
          }
        }
      });
    } else {
      console.log('Permission denied');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedResponse ? (
          <Text>No image picked yet</Text>
        ) : (
          <Image source={{ uri: pickedResponse.uri }} style={styles.image} />
        )}
      </View>
      <Button title="Pick Image" color={COLORS.primaryColor} onPress={handleTakePicture} />
    </View>
  );
};

export default ImageSelector;

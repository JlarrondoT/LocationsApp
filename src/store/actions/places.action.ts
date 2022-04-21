import { PLACES_TYPES } from '../types/places.type';
import RNFS from 'react-native-fs';
import { insertPlace, fetchPlaces } from '../../sqlite/sql.connection';

const { ADD_PLACE, LOAD_PLACE } = PLACES_TYPES;

export default {
  // @ts-ignore
  addPlace: (name, image, latitude, longitude) => {
    // @ts-ignore
    return async (dispatch) => {
      const fileName = image.split('/').pop();
      const Path = `file://${RNFS.DocumentDirectoryPath}/${fileName}`;

      try {
        await RNFS.copyFile(image, Path);

        const result = await insertPlace(name, Path, '', latitude, longitude);
        console.log('resultado insert bd: ', result);
        dispatch({
          type: ADD_PLACE,
          place: {
            id: result.insertId,
            name,
            image: Path,
            address: '',
            latitude,
            longitude,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
  loadPlace: () => {
    console.log('----LOAD PLACE----');
    return async (dispatch: any) => {
      try {
        const result = await fetchPlaces();
        console.log('resultado loadplace: ', result);
        dispatch({
          type: LOAD_PLACE,
          place: result,
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
};

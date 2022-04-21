import Place from '../../models/places.model';
import { PLACES_TYPES } from '../types/places.type';

const { ADD_PLACE, LOAD_PLACE } = PLACES_TYPES;

const initialState = {
  places: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.place.id,
        action.place.name,
        action.place.image,
        action.place.address,
        action.place.latitude,
        action.place.longitude
      );
      // @ts-ignore
      return { ...state, places: state.places.concat(newPlace) };
    case LOAD_PLACE:
      return {
        ...state,
        places: action.place.map(
          (item: any) => new Place(item.id, item.name, item.image, item.address, item.latitude, item.longitude)
        ),
      };
    default:
      return state;
  }
};

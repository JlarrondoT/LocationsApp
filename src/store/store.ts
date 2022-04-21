import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import placesReducer from './reducers/places.reducer';

const rootReducer = combineReducers({
    places: placesReducer
});

export default createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));

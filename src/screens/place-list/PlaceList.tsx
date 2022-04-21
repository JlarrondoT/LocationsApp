import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../../components/molecules/PlaceItem.molecule';
import PlacesAction from '../../store/actions/places.action';

// @ts-ignore
const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state: any) => state.places.places);

  useEffect(() => {
    dispatch(PlacesAction.loadPlace());
  }, []);

  const onSelectDetail = () => {
    navigation.navigate('PlaceDetail');
  };

  const renderItem = (item: any) => (
    <PlaceItem
      name={item.name}
      address={item.address}
      onSelect={() => onSelectDetail()}
      image={item.image}
      latitude={item.latitude}
      longitude={item.longitude}
    />
  );

  return <FlatList data={places} keyExtractor={(item) => item.id} renderItem={renderItem} />;
};

export default PlaceList;

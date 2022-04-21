import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/color.constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primaryColor,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  containerPlaceItem: {
    flex: 1,
    borderBottomColor: COLORS.primaryColor,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagePlaceItem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.secondaryColor,
  },
  details: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    color: COLORS.primaryColor,
    fontSize: 18,
    marginBottom: 10,
  },
  address: {
    color: COLORS.textColor,
    fontSize: 14,
  },
});

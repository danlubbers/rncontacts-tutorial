import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  createContactContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contactImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 100,
  },
  imageText: {
    color: colors.primary,
    alignSelf: 'center',
  },
});

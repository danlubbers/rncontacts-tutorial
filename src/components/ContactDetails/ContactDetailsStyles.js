import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: colors.white,
  },
  contactDetailsContainer: {
    flex: 1,
  },
  infoWrapper: {
    padding: 20,
  },
  fullName: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});

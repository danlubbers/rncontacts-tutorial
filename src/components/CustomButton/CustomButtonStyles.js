import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  buttonContainer: {
    height: 42,
    marginVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  loaderSection: {
    flexDirection: 'row',
  },
  activityIndicator: {
    paddingRight: 5,
  },
});

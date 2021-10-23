import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  settingsContainer: {
    backgroundColor: colors.white,
  },
  textWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 17,
  },
  textSubTitle: {
    paddingTop: 5,
    fontSize: 14,
    opacity: 0.5,
  },
});

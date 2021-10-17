import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  messageContainer: {
    height: 42,
    marginVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  textWrapper: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    color: colors.white,
  },
  retry: {
    color: colors.white,
  },
});

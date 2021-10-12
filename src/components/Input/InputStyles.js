import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  inputWrapper: {
    height: 42,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
  },
  error: {
    marginTop: 10,
    fontSize: 12,
    color: colors.danger,
  },
});

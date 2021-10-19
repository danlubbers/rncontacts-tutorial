import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  modalView: {
    marginHorizontal: 20,
    minHeight: 300,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  header: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 21,
  },
  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  footer: {
    justifyContent: 'space-evenly',
    paddingVertical: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },

  termsView: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: colors.grey,
  },

  footerSeparator: {
    height: 0.5,
    backgroundColor: colors.grey,
  },

  footerItems: {
    width: '100%',
    padding: 10,
  },

  footerText: {
    fontSize: 12,
  },
});

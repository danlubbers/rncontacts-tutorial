import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '500',
  },

  subTitle: {
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },

  form: {
    paddingTop: 20,
    marginBottom: 15,
  },
  createSection: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  infoText: {
    fontSize: 17,
  },
  linkBtn: {
    paddingLeft: 17,
    fontSize: 16,
    color: colors.primary,
  },
});

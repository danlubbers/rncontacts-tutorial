import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: colors.white,
  },
  contactDetailsContainer: {
    flex: 1,
  },
  addImageWrapper: {
    paddingVertical: 21,
    alignItems: 'center',
  },
  contactImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 100,
  },
  addImageText: {
    color: colors.primary,
  },
  infoWrapper: {
    padding: 20,
  },
  fullName: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  hrLine: {
    height: 10,
    borderColor: colors.grey,
    borderBottomWidth: 0.4,
  },

  topCallOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  topCallOption: {
    alignItems: 'center',
  },

  middleText: {
    fontSize: 14,
    color: colors.primary,
    paddingVertical: 5,
  },

  middleCallOptions: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  phoneMobile: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
});

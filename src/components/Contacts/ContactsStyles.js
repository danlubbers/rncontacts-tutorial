import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  listEmptyComponentContainer: {
    paddingVertical: 100,
    paddingHorizontal: 100,
  },
  flatListWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footerWrapper: {
    height: 150,
  },
  contactContainer: {
    paddingTop: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },

  contactWrapper: {
    flexDirection: 'row',
  },
  nameWrapper: {
    flexDirection: 'row',
  },
  noImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.grey,
  },
  activityContainer: {
    paddingVertical: 100,
    paddingHorizontal: 100,
  },
});

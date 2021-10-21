import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  contactsContainer: {
    backgroundColor: colors.white,
  },
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
  renderItemsContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  renderItemsWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  noImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
  infoWraper: {
    paddingLeft: 20,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    paddingVertical: 5,
    fontSize: 14,
    opacity: 0.6,
  },
  activityContainer: {
    paddingVertical: 100,
    paddingHorizontal: 100,
  },
  floatingActionBtn: {
    position: 'absolute',
    bottom: 45,
    right: 15,
    width: 55,
    height: 55,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

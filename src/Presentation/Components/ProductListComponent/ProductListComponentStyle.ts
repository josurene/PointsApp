import {StyleSheet} from 'react-native';
import Colors from '@Constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    width: 333,
    height: 55,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  productName: {
    width: 160,
    color: Colors.blackText,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
  },
  productDate: {
    color: Colors.blackText,
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
  points: {
    color: Colors.blackText,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    color: Colors.greenIcon,
  },
  minusIcon: {
    color: Colors.redIcon,
  },
  goToIcon: {
    alignSelf: 'center',
    color: Colors.blackText,
  },
});

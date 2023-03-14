import {StyleSheet} from 'react-native';
import Colors from '@Constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    width: 286,
    height: 143,
    backgroundColor: Colors.buttonBlue,
    borderRadius: 20,
  },
  month: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 22,
    marginTop: 21,
    marginLeft: 18,
    fontFamily: 'Avenir',
  },
  points: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 44,
    alignSelf: 'center',
    fontFamily: 'Avenir',
  },
});

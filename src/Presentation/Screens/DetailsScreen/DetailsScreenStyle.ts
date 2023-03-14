import {StyleSheet} from 'react-native';
import Colors from '@Constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  header: {
    backgroundColor: Colors.detailsHeader,
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  headerText: {
    color: Colors.blackText,
    fontWeight: '800',
    fontSize: 24,
    fontFamily: 'Avenir',
    marginBottom: 24,
    marginLeft: 20,
  },
  image: {
    alignSelf: 'center',
    height: 350,
    width: 353,
    backgroundColor: Colors.white,
    marginTop: 19,
    borderRadius: 10,
  },
  details: {
    color: Colors.grayText,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Avenir',
    marginTop: 32,
  },
  purchasedDate: {
    color: Colors.blackText,
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Avenir',
    marginTop: 19,
  },
  pointsText: {
    color: Colors.grayText,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Avenir',
    marginTop: 20,
  },
  points: {
    color: Colors.blackText,
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 33,
    fontFamily: 'Avenir',
    marginTop: 32,
  },
  acceptButton: {
    width: 353,
    height: 50,
    backgroundColor: Colors.buttonBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  acceptButtonText: {
    color: Colors.white,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
  },
});

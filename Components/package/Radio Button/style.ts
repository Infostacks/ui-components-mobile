import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  parentView: {
    height: 10 * 4,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  countryView: {
    height: '100%',
    width: '80%',
    flexDirection: 'row',
  },
  text: {
    color: '#030113',
    fontSize: 16,
    fontFamily: 'medium', // Adjust the fontFamily based on your requirement
  },
  text1: {
    color: '#030113',
    marginLeft: 2,
    fontSize: 16,
    fontFamily: 'medium', // Adjust the fontFamily based on your requirement
  },
});

export default Style;

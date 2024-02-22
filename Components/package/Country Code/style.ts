import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  parentView: {
    height: 24 * 16,
    width: 24 * 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentSignin: {
    fontWeight: 'bold',
    color: '#000',
  },

  view1: {
    width: '100%',
    height: 'auto',
    marginTop: 1.5 * 16,
  },
  childView2: {
    width: '100%',
  },
  field: {
    backgroundColor: '#d2dbff',
    paddingLeft: 3 * 16,
    height: 3 * 16,
    padding: 0.7 * 16,
    fontSize: 1.125 * 16,
    borderRadius: 0.25 * 16,
    color: '#4c4b59',
    borderWidth: 1,
    borderColor: '#4950ff',
  },
  scrollView: {
    height: 'auto',
    width: '100%',
    marginLeft: 0.0625 * 16,
    marginTop: 1 * 16,
    marginBottom: 1.5 * 16,
  },
  imageView: {
    position: 'absolute',
    left: 1 * 16,
    marginTop: 0.9 * 16,
  },
  image2: {
    height: 1.25 * 16,
    width: 1.25 * 16,
    marginTop: 0.125 * 16,
  },
});
export default Style;

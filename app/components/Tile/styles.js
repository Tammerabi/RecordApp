import { StyleSheet, Dimensions } from 'react-native';

const size = Dimensions.get('window').height * 0.35
const marginTop = Dimensions.get('window').width * 0.05
export default StyleSheet.create({
  box: {
    flex: 0.45,
    width: size,
    height: size,
    marginTop: marginTop,
    backgroundColor: 'red'
  },
});
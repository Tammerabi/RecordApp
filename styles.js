import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height

export default StyleSheet.create({
    flatlist: {
        flex: 1,
        justifyContent: 'space-evenly'
    }
});
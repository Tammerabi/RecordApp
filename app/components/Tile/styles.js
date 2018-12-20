import { StyleSheet, Dimensions } from 'react-native';
import {moderateScale} from '../../utils/fontScale'
import CONSTANTS from '../../../app/constants'

const size = Dimensions.get('window').height * 0.35
const marginTop = Dimensions.get('window').width * 0.05

export default StyleSheet.create({
    box: {
        flex: 0.45,
        width: size,
        height: size,
        marginTop: marginTop,
        backgroundColor: CONSTANTS.PLATINUM
    },
    upperBox: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: moderateScale(20)
    },
    lowerBox: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: CONSTANTS.PLATINUM,
        backgroundColor: '#fff',
        flex: 0.25,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: moderateScale(30),
        height: moderateScale(25),
        lineHeight: moderateScale(30),
        textAlign: 'center'
    },
    number: {
        fontSize: moderateScale(120),
        height: moderateScale(100),
        lineHeight: moderateScale(120),
        textAlign: 'center'
    },
    text: {
        fontSize: moderateScale(20),
        height: moderateScale(20),
        lineHeight: moderateScale(20),
        textAlign: 'center'
    },
    date: {
        textAlign: 'center'
    }
});
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
        backgroundColor: CONSTANTS.PLATINUM,
        borderRadius: 4,
        paddingTop: moderateScale(8)
    },
    upperBox: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: moderateScale(20),
    },
    lowerBox: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderWidth: 1,
        borderColor: CONSTANTS.PLATINUM,
        backgroundColor: '#fff',
        flex: 0.25,
        justifyContent: 'center'
    },
    title: {
        fontSize: moderateScale(28),
        height: moderateScale(25),
        lineHeight: moderateScale(28),
        textAlign: 'center',
        color: 'white',
        fontFamily: 'RODUScut700'
    },
    number: {
        fontSize: moderateScale(110),
        height: moderateScale(90),
        lineHeight: moderateScale(110),
        textAlign: 'center',
        color: 'white',
        fontFamily: 'RODUScut300'
    },
    text: {
        fontSize: moderateScale(20),
        height: moderateScale(20),
        lineHeight: moderateScale(20),
        textAlign: 'center',
        color: 'white',
        fontFamily: 'RODUScut300'
    },
    date: {
        textAlign: 'center'
    }
});
import { StyleSheet } from 'react-native';
import {moderateScale} from '../../utils/fontScale'
import CONSTANTS from '../../../app/constants'

export default StyleSheet.create({
    text: {
        fontSize: moderateScale(15)
    },
    container: {
        flex: 1, 
        padding: 20,
        flexDirection: 'column', 
        alignItems: 'stretch', 
        justifyContent: 'flex-start' 
    },
    row: {
        height: moderateScale(100)
    },
    multirow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        height: 40
    },
    touchable: {
        flex: .15, 
        backgroundColor: CONSTANTS.GOLD,
        justifyContent: 'center',
    },
    saveButton: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: moderateScale(25),
        fontWeight: 'bold'
    }
});
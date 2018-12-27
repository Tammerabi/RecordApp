import { StyleSheet } from 'react-native';
import {moderateScale} from '../../utils/fontScale'
import CONSTANTS from '../../../app/constants'

export default StyleSheet.create({
    touchable: {
        height: moderateScale(65), 
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: moderateScale(25),
        fontWeight: 'bold',
        flex: 1
    }
});
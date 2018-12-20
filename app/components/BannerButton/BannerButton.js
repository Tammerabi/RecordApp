import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const BannerButton = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={styles.touchable}>
            <Text style={styles.button}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default BannerButton;
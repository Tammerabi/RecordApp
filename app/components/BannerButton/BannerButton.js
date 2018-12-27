import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient'

const BannerButton = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[styles.touchable, props.style]}>
            <LinearGradient colors={props.colors} useAngle= {true} angle= {135} angleCenter= {{ x: 0.25, y: 0.25}} style={{flex: 1}}>
                <Text style={styles.buttonText}>{props.text}</Text>
        </LinearGradient>
            </TouchableOpacity>
    );
};

export default BannerButton;
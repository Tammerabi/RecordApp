import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient'

const Tile = (props) => {
    return (
    <LinearGradient colors={chooseColor()} useAngle= {true} angle= {135} angleCenter= {{ x: 0.25, y: 0.25}}  style={styles.box}>
        <View style={styles.upperBox}>
            <Text style={styles.title}>RUN</Text>
            <Text style={styles.number}>27</Text>
            <Text style={styles.text}>miles</Text>
        </View>
        <View style={styles.lowerBox}>
            <Text style={styles.date}>Dec 18, 2018</Text>
        </View>
    </LinearGradient>
    );
};

chooseColor = () => {
    let x = Math.floor(Math.random()*5)
    switch (x) {
        case 0: 
            return ['#A40606', '#D98324'];
        case 1:
            return ['#3F0D12', '#A71D31'];
        case 2:
            return ['#233329', '#63D471'];
        case 3:
            return ['#C373F2', '#F977CE'];
        case 4:
            return ['#6B0F1A', '#B91372']
    }
}

export default Tile;
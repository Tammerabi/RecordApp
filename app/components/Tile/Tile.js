import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Tile = (props) => {
  
    return (
      <View style={styles.box}>
        <View style={styles.upperBox}>
            <Text style={styles.title}>RUN</Text>
            <Text style={styles.number}>8</Text>
            <Text style={styles.text}>miles</Text>
        </View>
        <View style={styles.lowerBox}>
            <Text style={styles.date}>Dec 18, 2018</Text>
        </View>
      </View>
    );
};

export default Tile;
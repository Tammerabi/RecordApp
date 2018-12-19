import React from "react";
import { Button, View, Text, FlatList, StatusBar, TextInput } from "react-native";
import styles from './styles';

export default class AddRecordScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        description: '',
        number: 0,
        units: '',
        date: ''
      };
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('otherParam', 'Add New Record'),
      };
    };
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="#FFD700"
            />
            <View style={styles.row} >
              <Text style={styles.text}>Description</Text>
              <TextInput 
                underlineColorAndroid= "#bbb"
                style={styles.input}
                placeholder="e.g. Run"
                onChangeText={(description) => this.setState({description})}
              />
            </View>
            <View style={[styles.row, styles.multirow]}>
              <View style={{flex: .35, flexDirection: 'column'}} >
                <Text style={styles.text}>How many?</Text>
                <TextInput
                  underlineColorAndroid= "#bbb"
                  style={styles.input}
                  onChangeText={(number) => this.setState({text})}
                />
              </View>
              <View style={{flex: .55, flexDirection: 'column'}} >
                <Text style={styles.text}>Units</Text>
                <TextInput
                  underlineColorAndroid= "#bbb"
                  style={styles.input}
                  placeholder="Miles"
                  onChangeText={(units) => this.setState({units})}
                />
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Date</Text>
              <TextInput
                underlineColorAndroid= "#bbb"
                style={styles.input}
                placeholder="mm/dd/yy"
                onChangeText={(date) => this.setState({date})}
                />
            </View>
          </View>
          <View>
            <Button
              title="SAVE"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </View>
      );
    }
  }
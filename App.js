// In App.js in a new project

import React from "react";
import { View, FlatList, StatusBar, Alert, AsyncStorage } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddRecordScreen from './app/screens/AddRecordScreen/AddRecordScreen.js'
import Tile from './app/components/Tile';
import styles from './styles';
import CONSTANTS from './app/constants';
import BannerButton from './app/components/BannerButton'
import LinearGradient from 'react-native-linear-gradient'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [{key: 1}, {key: 2}] };
  }
  static navigationOptions = {
    title: 'My Records',
  };

  componentDidMount() {
    this.getAllRecords()
  }

  async getAllRecords() {
    try {
        var keys = await AsyncStorage.getAllKeys()
        var records = await AsyncStorage.multiGet(keys);
        console.log('heh', records)
        return records;
    } catch (error) {
        console.log(error)
        return error;
    }
}

  render() {
    return (
      <LinearGradient style={{flex: 1, 
                              justifyContent: 'space-between', 
                              backgroundColor: CONSTANTS.BACKGROUND_COLOR}}
                      colors={['#414141', '#000000']} useAngle= {true} angle= {135} angleCenter= {{ x: 0.25, y: 0.25}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={CONSTANTS.HEADER_COLOR}
        />
        <FlatList 
          columnWrapperStyle={styles.flatlist}
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
          renderItem={({item}) => <Tile />}
          numColumns={2}
        />
        <BannerButton
          text="ADD NEW RECORD"
          colors={[CONSTANTS.NEW_RECORD_BUTTON_1, CONSTANTS.NEW_RECORD_BUTTON_2]}
          onPress={() => this.props.navigation.navigate('AddRecord')}
        />
      </LinearGradient>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AddRecord: AddRecordScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: CONSTANTS.HEADER_COLOR
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
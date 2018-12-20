// In App.js in a new project

import React from "react";
import { View, FlatList, StatusBar, Alert } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddRecordScreen from './app/screens/AddRecordScreen/AddRecordScreen.js'
import Tile from './app/components/Tile';
import styles from './styles';
import CONSTANTS from './app/constants';
import BannerButton from './app/components/BannerButton'
import getAllRecords from './app/utils/storage'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [{key: 1}, {key: 2}] };
  }
  static navigationOptions = {
    title: 'My Records',
  };

  componentDidMount() {
    this.retrieveAllRecords()
  }

  async retrieveAllRecords() {
    console.log("Retrieving")
    var records = await getAllRecords()
    console.log("Records: " + JSON.stringify(records));
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <StatusBar
          barStyle="dark-content"
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
          onPress={() => this.retrieveAllRecords()}
        />
      </View>
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
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: CONSTANTS.HEADER_COLOR,
      },
      headerTintColor: '#000',
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
// In App.js in a new project

import React from "react";
import { Button, View, Text, FlatList, StatusBar, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddRecordScreen from './app/screens/AddRecordScreen/AddRecordScreen.js'
import Tile from './app/components/Tile';
import styles from './styles';
import CONSTANTS from './app/constants';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [{key: 1}, {key: 2}] };
  }
  static navigationOptions = {
    title: 'My Records',
  };

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
        <Button
          title="ADD NEW RECORD"
          onPress={() => this.props.navigation.navigate('AddRecord')}
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
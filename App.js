// In App.js in a new project

import React from "react";
import { Button, View, Text, FlatList, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tile from './app/components/Tile';
import styles from './styles';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [{key: 1}, {key: 2}] };
  }
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFD700"
        />
        <FlatList 
          columnWrapperStyle={styles.flatlist}
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
          renderItem={({item}) => <Tile />}
          numColumns={2}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFD700"
        />
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FFD700',
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
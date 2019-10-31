import React from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Orders extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state} = navigation;
    const {} = state;
    return {
      headerRight: (
        <Button
          title="Logout"
          onPress={async () => {
            await AsyncStorage.removeItem('token'); //remove token from async storage
            navigation.navigate('Home'); //direct user to login screen
          }}></Button>
      ),
    };
  };

  //This is the first page that users see after login. To prevent logged in users from
  //going back to login screen, the back button of the device has been disabled only for this
  //screen.
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }
  render() {
    return (
      <View style={styles1.container}>
        <Text> Order Details {'\n'}</Text>

        <View style={styles1.sec}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderDetails')}>
            <View
              style={{
                flexDirection: 'row',
                padding: '2%',
                height: '100%',
                width: '100%',
              }}>
              <View style={styles1.img}></View>
              <View>
                <Text style={styles1.txt}>Order Number 1</Text>
                <Text style={styles1.txt}>Order Number 1</Text>
                <Text style={styles1.txt}>Order Number 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles1.sec}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderDetails')}>
            <View
              style={{
                flexDirection: 'row',
                padding: '2%',
                height: '100%',
                width: '100%',
              }}>
              <View style={styles1.img}></View>
              <View>
                <Text style={styles1.txt}>Order Number 1</Text>
                <Text style={styles1.txt}>Order Number 1</Text>
                <Text style={styles1.txt}>Order Number 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles1.sec}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderDetails')}>
            <View
              style={{
                flexDirection: 'row',
                padding: '2%',
                height: '100%',
                width: '100%',
              }}>
              <View style={styles1.img}></View>
              <View>
                <Text style={styles1.txt}>Order Number 1</Text>
                <Text style={styles1.txt}>Order Number 1</Text>
                <Text style={styles1.txt}>Order Number 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 0,
  },
  txt: {
    marginLeft: '6%',
  },
  sec: {
    elevation: 10,
    backgroundColor: '#faf0e6',
    width: '95%',
    borderColor: '#dddddd',
    borderStyle: 'solid',
    height: 100,
    padding: '1%',
    margin: '2%',
  },
  heading: {
    fontSize: 26,
    color: '#121212',
    marginTop: 0,
  },
  img: {
    width: '20%',
    height: '100%',
    backgroundColor: '#aaaaaa',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

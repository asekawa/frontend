import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  BackHandler
} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export class Login extends React.Component {
  static navigationOption = {
    header: null,
  };

  state = {
    email: '',
    password: '',
  };

  //This function set user token sent by the server in async storage. Async Storage is
  // similar to local storage in web apps. After setting, user is directed to "Orders" page.
  //(for definitions of the screens, see App.js)
  setToken = async token => {
    await AsyncStorage.setItem("token", token).then(async val => {
        const token = await AsyncStorage.getItem('token')
        this.props.navigation.navigate('Orders');
    });
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

  //No. 01
  //This function is called when "Login" button is pressed.There is a route '/authenticate'
  //in the backend which handles login using email and password. Axios library provides a
  //way to specify base url (in this case "http://192.168.1.100:300/api") in App.js. Then
  //all subsequent request urls in the app are appended to this base url and sent to the server.
  login = () => {
    axios.post('/authenticate',{
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      if(res.data.token){
        this.setToken(res.data.token);
        Alert.alert("Login Success");
      }
      else if(err){
        Alert.alert("Login F");

      }
    })
    //}).catch(err => Alert.alert("Login failed"))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue', fontSize: 20}}>
          Restaurant Management System {'\n'}
        </Text>

        <View style={{display: "flex"}}></View>
        <View style={styles.username}>
          <Text style={{fontSize: 15}}>Email</Text>

          <TextInput
            style={{width: 300, borderColor: 'black', borderEndWidth: 1}}
            value={this.state.username}
            onChangeText={text => this.setState({email: text})}
          />
        </View>

        <View style={styles.password}>
          <Text style={{fontSize: 15}}>Password</Text>

          <TextInput
            style={{width: 300, borderColor: 'black', borderEndWidth: 1}}
            onChangeText={text => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
          />
        </View>

        <Button
          title="Log in"
          onPress={this.login}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  username: {
    display: "flex",
    flexDirection: "column",
  },
  password: {
    display: "flex",
    flexDirection: "column"
  }
});

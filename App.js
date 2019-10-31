import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Login} from "./screens/LogIn"
import {Orders} from "./screens/Orders"
import CheckAuth from './util/CheckAuth'
import {OrderDetails} from "./screens/OrderDetails"
import {MapView} from "./screens/MapView"
import axios from 'axios'

//defining base url here enables you to write network requests to the server
//without having to write full url all the time. Instead you should only use the rest
//of the path(relative path)
//Eg: /authenticate instead of http://192.168.1.100:3000/api/authenticate
//The following IP address differs from each other. make sure to check your machine's
//IP address and replace this with it( IP only. Keep the port number as it is).
axios.defaults.baseURL = "http://100.98.71.224:3000/api/"

const AppNavigator = createStackNavigator(
  {
    Home:  {
      screen: Login,
      navigationOptions:  {
        title: '',
        headerLeft: null
    }
    
    },
    Orders: {
      screen: Orders,
      navigationOptions:  {
        title: 'Orders',
        headerLeft: null
    }
    },
    OrderDetails:OrderDetails,
    CheckAuth: CheckAuth,
    MapView:MapView,
  },

  {
    initialRouteName: "CheckAuth"
  }
);

  

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginForm from './src/screens/login';
import Main from './src/screens/main';
import App from './src/screens/navi';
import {name as appName} from './app.json';
import { createStackNavigator, createAppContainer } from "react-navigation";

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyCtRqoLcxKx6WIxhQ-edfaO1WqqjLwXkjw",
  authDomain: "adtree-bc7dc.firebaseapp.com",
  databaseURL: "https://adtree-bc7dc.firebaseio.com/",
  storageBucket: "adtree-bc7dc.appspot.com",
});
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    this.setState({ loggedIn: true })
  } else {
    this.setState({ loggedIn: false })
  }
})

AppRegistry.registerComponent(appName, () => App);

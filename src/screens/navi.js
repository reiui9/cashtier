import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be 
import LoginForm from './login';
import Main from './main';

const AppNavigator = createStackNavigator({
  LoginForm: {
    screen: LoginForm,
  },
  Main: {
    screen: Main,
  },
}, {
    initialRouteName: 'LoginForm',
});

const App = createAppContainer(AppNavigator);

export default App
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginForm from './src/screens/login';
import Main from './src/screens/main';
import App from './src/screens/navi';
import {name as appName} from './app.json';
import { createStackNavigator, createAppContainer } from "react-navigation";

AppRegistry.registerComponent(appName, () => App);

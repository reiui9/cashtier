/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginForm from './src/screens/login';
import Main from './src/screens/main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginForm);

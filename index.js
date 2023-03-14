/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from '@Presentation/Stacks/MainContainerStack';

AppRegistry.registerComponent(appName, () => App);

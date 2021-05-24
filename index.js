import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/App';
import TaskService from './src/TaskService';
import store from './src/store';

import { name as appKey, taskName as taskKey } from './app.json';

const Root = () => <Provider store={store}><App/></Provider>;

AppRegistry.registerComponent(appKey, () => Root);
AppRegistry.registerHeadlessTask(taskKey, () => TaskService);
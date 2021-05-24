import React from 'react';
import { createStore } from 'redux'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';

import { name as appName, taskName } from './app.json';

const reducer = (state = { url: "https://cdn2.thecatapi.com/images/e11.jpg" }, action) => {
    switch (action.type) {
        case 'UPDATE_URL':
            return { url: action.url };
        default:
            return state;
    }
}

const store = createStore(reducer);

const updateUrl = url => ({
    type: 'UPDATE_URL',
    url
});

const Root = () => <Provider store={store}><App/></Provider>;

const Task = async (taskData) => {
    fetch(taskData.url).then(response => response.json()).then(json => {
        const [{ url }] = json;
        store.dispatch(updateUrl(url));
    } )
};

AppRegistry.registerComponent(appName, () => Root);
AppRegistry.registerHeadlessTask(taskName, () => Task);
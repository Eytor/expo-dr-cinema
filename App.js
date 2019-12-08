import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/navigation/navigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tokenReducer from './src/reducers/tokenReducer';

const AppContainer = createAppContainer(AppNavigator);
export default function App() {
    return (
    <Provider store={ createStore(tokenReducer)}>
        <AppContainer />
    </Provider>
    );
}

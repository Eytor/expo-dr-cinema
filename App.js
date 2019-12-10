import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppNavigator from './src/navigation/navigator';
import reducers from './src/reducers';

const AppContainer = createAppContainer(AppNavigator);
export default function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <AppContainer />
        </Provider>
    );
}

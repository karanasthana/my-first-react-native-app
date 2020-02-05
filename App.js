import React from 'react';

import store from './src/store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import AppNavigation from './src/components/AppNavigator';
import TodoApp from './src/TodoApp';
import TodoDetails from './src/components/TodoDetails';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import materialIcon from 'react-native-vector-icons/MaterialIcons';
// let Navigation = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}

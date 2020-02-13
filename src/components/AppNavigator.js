import React from 'react';
import TodoApp from '../TodoApp';
import About from '../components/About';
import TodoDetails from '../components/TodoDetails';

import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { addNavigationHelpers, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// let TdDetails = connect()(TodoDetails);
// let TdApp = connect()(TodoApp);

let DrawerNavigation = createDrawerNavigator(
    {
        todoDetails: TodoDetails,
        about: About,
    }
);

let AppNavigator = createStackNavigator(
    {
        home: TodoApp, // TdApp,
        todoDetails: DrawerNavigation, // TdDetails,
    }
);


const AppNavigation = createAppContainer(AppNavigator);

const mapStateToProps = (state) => {
    return {
        nav :state.nav,
    }
};

export default connect(mapStateToProps)(AppNavigation);
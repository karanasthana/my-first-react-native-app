import React from 'react';
import TodoApp from '../TodoApp';
import TodoDetails from '../components/TodoDetails';

import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { addNavigationHelpers, createAppContainer } from 'react-navigation';

// let TdDetails = connect()(TodoDetails);
// let TdApp = connect()(TodoApp);

let AppNavigator = createStackNavigator(
    {
        home: TodoApp, // TdApp,
        todoDetails: TodoDetails, // TdDetails,
    }
);


const AppNavigation = createAppContainer(AppNavigator);

const mapStateToProps = (state) => {
    return {
        nav :state.nav,
    }
};

export default connect(mapStateToProps)(AppNavigation);
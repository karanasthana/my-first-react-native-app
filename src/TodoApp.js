import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTodo />
                <View>
                    <VisibleTodos navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
});

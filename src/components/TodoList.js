/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { redirectionTodo } from '../actions';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {todos,
    toggleTodo,
    deleteTodo,
    completeTodo,
    uncompleteTodo,
    redirectionTodo,} from '../actions'

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        // var navigation = this.props.navigation;
    }

    navigateToScreenTwo(todo) {
        // redirectionTodo(todo.id);
        this.props.navigation.navigate('todoDetails');
    }

    render() {
        const self = this;
        return (
            <View style={{ padding: 10 }}>
            {this.props.todos.map((todo, index, navigation) => (
                <View style={{ flexDirection: 'row' }} key={todo.id}>
                    <TouchableOpacity
                        key={todo.id}
                           // onPress={() => toggleTodo(todo.id)}
                        onPress={() => (
                            this.navigateToScreenTwo(todo)
                        )
                        }
                        style={{ alignSelf: 'flex-start', flex: 6 }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                textDecorationLine: todo.completed
                                    ? 'line-through'
                                    : 'none',
                            }}
                        >
                            {todo.text}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={todo.id + 'u'}
                        onPress={() => uncompleteTodo(todo.id)}
                        style={{ alignItems: 'flex-end', flex: 3 }}
                    >
                        <Text>{todo.completed ? 'Uncomplete' : ''}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={todo.id + 'c'}
                        onPress={() => completeTodo(todo.id)}
                        style={{ alignItems: 'flex-end', flex: 3 }}
                    >
                        <Text>{todo.completed ? '' : 'Complete'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={todo.id + 'd'}
                        onPress={() => deleteTodo(todo.id)}
                        style={{ alignItems: 'flex-end', flex: 2 }}
                    >
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            ))}
            </View>
        );
    }

}

// const TodoList = ({
//     todos,
//     toggleTodo,
//     deleteTodo,
//     completeTodo,
//     uncompleteTodo,
//     redirectionTodo,
// }) => (
//     <View style={{ padding: 10 }}>
//         {todos.map(todo => (
//             <View style={{ flexDirection: 'row' }}>
//                 <TouchableOpacity
//                     key={todo.id}
//                     // onPress={() => toggleTodo(todo.id)}
//                     onPress={() =>
//                         redirectionTodo(todo.id)
//                     }
//                     style={{ alignSelf: 'flex-start', flex: 6 }}
//                 >
//                     <Text
//                         style={{
//                             fontSize: 24,
//                             textDecorationLine: todo.completed
//                                 ? 'line-through'
//                                 : 'none',
//                         }}
//                     >
//                         {todo.text}
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     key={todo.id + 'u'}
//                     onPress={() => uncompleteTodo(todo.id)}
//                     style={{ alignItems: 'flex-end', flex: 3 }}
//                 >
//                     <Text>{todo.completed ? 'Uncomplete' : ''}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     key={todo.id + 'c'}
//                     onPress={() => completeTodo(todo.id)}
//                     style={{ alignItems: 'flex-end', flex: 3 }}
//                 >
//                     <Text>{todo.completed ? '' : 'Complete'}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     key={todo.id + 'd'}
//                     onPress={() => deleteTodo(todo.id)}
//                     style={{ alignItems: 'flex-end', flex: 2 }}
//                 >
//                     <Text>Delete</Text>
//                 </TouchableOpacity>
//             </View>
//         ))}
//     </View>
// );

// export default TodoList;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// // });

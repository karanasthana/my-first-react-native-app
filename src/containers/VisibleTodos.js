import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {
    toggleTodo,
    deleteTodo,
    completeTodo,
    uncompleteTodo,
    redirectionTodo,
} from '../actions';

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    completeTodo: id => dispatch(completeTodo(id)),
    uncompleteTodo: id => dispatch(uncompleteTodo(id)),
    redirectionTodo: id => dispatch(redirectionTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    REDIRECT_TO_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
} from './actionTypes';

let nextId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextId++,
    text,
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id,
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id,
});

export const completeTodo = id => ({
    type: COMPLETE_TODO,
    id,
});

export const uncompleteTodo = id => ({
    type: UNCOMPLETE_TODO,
    id,
});

export const redirectionTodo = id => ({
    type: REDIRECT_TO_TODO,
    id,
});

/* eslint-disable no-debugger */
let todoId = 0;

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: todoId++,
                    text: action.text,
                    completed: false,
                },
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            );
        case 'REDIRECT_TO_TODO':
            let redirectionTodos = [...state];
            let redirectToState = redirectionTodos.find(function(todoItem) {
                return todoItem.id === action.id;
            });
            console.log(redirectToState);
            return redirectionTodos;
        case 'DELETE_TODO':
            let todosList = [...state];
            let newState = todosList.filter(function(todoItem) {
                return todoItem.id === action.id ? '' : todoItem;
            });
            return newState;
        case 'COMPLETE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: true } : todo,
            );
        case 'UNCOMPLETE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: false } : todo,
            );
        default:
            return state;
    }
};

export default todos;

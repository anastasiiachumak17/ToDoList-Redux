const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const REMOVE_TASK = ' REMOVE_TASK';
const REMOVE_ALL = 'REMOVE_ALL';
const SORT_BY_DATE = 'SORT_BY_DATE';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

let InitialState = {
        todos: [
            {id: 1, text: 'Task 1', complete: false, date: '1'},
            {id: 2, text: 'Task 2', complete: true, date: '2'},
            {id: 3, text: 'Task 3', complete: false, date: '5'},
            {id: 4, text: 'Task 4', complete: true, date: '4'},
            {id: 5, text: 'Task 5', complete: false, date: '3'},
        ],
    }
;

const ToDoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todos: [...state.todos, {
                    id: state.todos.length + 1,
                    text: action.text,
                    complete: false,
                    date: new Date().toLocaleString()
                }]
            }
        case TOGGLE_TASK:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.todoId ? {...todo, complete: !todo.complete} : todo)
            }
        case REMOVE_TASK:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.taskId)
            }
        case REMOVE_ALL:
            return {
                ...state, todos: []
            }
        case SORT_BY_DATE:
            return {
                ...state,
                todos: [...state.todos.sort(function (a, b) {
                    if (a.date < b.date) {
                        return -1;
                    }
                    if (a.date > b.date) {
                        return 1;
                    }
                    return 0;
                })]
            }
        case SHOW_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.complete)
            }

        case SHOW_ACTIVE:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.complete)
            }

        case REMOVE_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.complete)
            }
        default:
            return state;
    }

}

export default ToDoReducer;

export const AddTaskActionCreator = (text) => {
    return {
        type: ADD_TASK,
        text: text
    }
}

export const ToggleActionCreator = (id) => {
    return {
        type: TOGGLE_TASK,
        todoId: id
    }
}

export const RemoveTaskActionCreator = (id) => {
    return {
        type: REMOVE_TASK,
        taskId: id
    }
}

export const RemoveAllTasksActionCreator = () => {
    return {
        type: REMOVE_ALL
    }
}

export const SortByDateActionCreator = () => {
    return {
        type: SORT_BY_DATE
    }
}

export const ShowCompletedTasksActionCreator = () => {
    return {
        type: SHOW_COMPLETED
    }
}

export const ShowActiveTasksActionCreator = () => {
    return {
        type: SHOW_ACTIVE
    }
}

export const RemoveCompletedTasksActionCreator = () => {
    return {
        type: REMOVE_COMPLETED
    }
}

import { Todo } from "../App";

// State interface
export interface TodoState{
    input: string;
    todos: Todo[];
    nextToId: number;
}

const initialState: TodoState = {
    input: "",
    todos: [],
    nextToId: 1,
}

// Action types
const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT" as const;
const ADD_TODO = "ADD_TODO" as const;
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS" as const;
const REMOVE_TODO = "REMOVE_TODO" as const;
const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS" as const;

// Action functions
export const changeTodoInput = (input: string) => ({type: CHANGE_TODO_INPUT, input});
export const addTodo = (input: string) => ({type: ADD_TODO, todo: {text: input, done: false}});
export const toggleTodoStatus = (id: number) => ({type: TOGGLE_TODO_STATUS, id});
export const removeTodo = (id: number) => ({type: REMOVE_TODO, id});
export const clearAllTodos = () => ({type: CLEAR_ALL_TODOS});

// Define return types for action functions
type TodoAction = ReturnType<typeof changeTodoInput> | ReturnType<typeof addTodo>
                                | ReturnType<typeof toggleTodoStatus> | ReturnType<typeof removeTodo>
                                | ReturnType<typeof clearAllTodos>;

// Reducer functions
function todos(state: TodoState = initialState, action: TodoAction){
    switch(action.type){
        case CHANGE_TODO_INPUT:
            return {...state, input: action.input};
        case ADD_TODO:
            const newTodo = {...action.todo, id: state.nextToId};
            state.nextToId++;
            return {...state, todos: state.todos.concat(newTodo)};
        case TOGGLE_TODO_STATUS:
            return {...state, todos: state.todos.map((todo)=>(todo.id === action.id ? {...todo, done: !todo.done} : todo))};
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter((todo)=>(todo.id !== action.id))};
        case CLEAR_ALL_TODOS:
            return {...state, todos: []};
        default:
            return state;
    }
}

export default todos;
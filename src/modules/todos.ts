import {createAction} from "redux-actions";
import {createReducer} from "typesafe-actions";
import { Todo } from "../App";

// State interface
export interface TodoState{
    input: string;
    todos: Todo[];
    nextToId: number;
    filter: string;
}

const initialState: TodoState = {
    input: "",
    todos: [],
    nextToId: 1,
    filter: "ALL",
}

// Action types
const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT" as const;
const ADD_TODO = "ADD_TODO" as const;
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS" as const;
const REMOVE_TODO = "REMOVE_TODO" as const;
const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS" as const;
const LOAD_TODOS = "LOAD_TODOS";
const CHANGE_FILTER = "CHANGE_FILTER";
const EDIT_TODO = "EDIT_TODO";

// Action functions
export const changeTodoInput = createAction(CHANGE_TODO_INPUT, (input: string)=>input);
export const addTodo = createAction(ADD_TODO, (input: string)=>({text: input, done: false}));
export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS, (id: number)=>id);
export const removeTodo = createAction(REMOVE_TODO, (id: number)=>id);
export const clearAllTodos = createAction(CLEAR_ALL_TODOS, ()=>{});
export const loadSavedTodos = createAction(LOAD_TODOS, (data: string)=>data);
export const changeFilter = createAction(CHANGE_FILTER, (filter: string)=>filter);
export const editTodo = createAction(EDIT_TODO, (id: number, input: string)=>({id, input}));

// Define Reducer using createReducer.
const todos = createReducer(initialState, {
    [CHANGE_TODO_INPUT]: (state, {payload: input}) => ({...state, input: input}),
    [ADD_TODO]: (state, {payload: todo}) => {
        const newTodo = {...todo, id: state.nextToId};
        state.nextToId++;
        return ({...state, todos: state.todos.concat(newTodo)});
    },
    [TOGGLE_TODO_STATUS]: (state, {payload: id}) => ({
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? {...todo, done: !todo.done} : todo))
    }),
    [REMOVE_TODO]: (state, {payload: id}) => ({...state, todos: state.todos.filter((todo) => (todo.id !== id))}),
    [CLEAR_ALL_TODOS]: (state) => ({...state, todos: []}),
    [LOAD_TODOS]: (state, action) => ({...state, todos: action.payload.todos, nextToId: action.payload.nextToId}),
    [CHANGE_FILTER]: (state, {payload: filter}) => ({...state, filter}),
    [EDIT_TODO]: (state, action)=>({...state, todos: state.todos.map((todo)=>(todo.id===action.payload.id ? {...todo, text: action.payload.input} : todo))}),
});

export default todos;
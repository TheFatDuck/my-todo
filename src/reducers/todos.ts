import {Todo} from "../App";
import {createReducer} from "typesafe-actions";
import {CHANGE_TODO_INPUT, ADD_TODO, TOGGLE_TODO_STATUS, REMOVE_TODO, CLEAR_ALL_TODOS, LOAD_TODOS, CHANGE_FILTER, EDIT_TODO, SET_EDITING_ID, RESET_EDITING_ID} from "../constants/ActionTypes";

export interface TodoState{
    input: string;
    todos: Todo[];
    nextToId: number;
    filter: string;
    editingId: number;
}

const initialState: TodoState = {
    input: "",
    todos: [],
    nextToId: 1,
    filter: "ALL",
    editingId: 0,
}

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
    [SET_EDITING_ID]: (state, id)=>({...state, editingId: id}),
    [RESET_EDITING_ID]: (state)=>({...state, editTodo: 0}),
});

export default todos;
import {createSelector} from "reselect";
import {TodoState} from "./todos";

const getTodos = (state: TodoState) => state.todos;
const getFilter = (state: TodoState) => state.filter;

export const getFilteredTodos = createSelector([getTodos, getFilter],
    (todos, filter) => {
        if(filter === "P") return todos.filter((todo)=>(todo.done === false));
        else if(filter === "D") return todos.filter((todo)=>(todo.done === true));
        else return todos;
    }
);
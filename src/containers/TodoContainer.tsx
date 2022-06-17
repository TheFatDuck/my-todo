import React, {useCallback} from "react";
import{useSelector, useDispatch} from "react-redux";
import {TodoState, changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos, changeFilter} from "../modules/todos";
import Todos from "../components/Todos"
import {Todo} from "../App";

const getFilteredTodos = (todos: Todo[], filter: string) => {
    if(filter === "P") return todos.filter((todo)=>(todo.done === false));
    if(filter === "D") return todos.filter((todo)=>(todo.done === true));
    return todos; // ALL or unknown exception.
}
const TodosContainer = () => {
    const {input, todos, filter} = useSelector((state: TodoState)=>({input: state.input, todos: state.todos, filter: state.filter}));
    const dispatch = useDispatch();
    const onChangeInput = useCallback((input: string)=>dispatch(changeTodoInput(input)),[dispatch]);
    const onInsert = useCallback((input: string)=>dispatch(addTodo(input)), [dispatch]);
    const onToggle = useCallback((id: number)=>dispatch(toggleTodoStatus(id)), [dispatch]);
    const onRemove = useCallback((id: number)=>dispatch(removeTodo(id)), [dispatch]);
    const onClearAll = useCallback(()=>dispatch(clearAllTodos()), [dispatch]);
    const onChangeFilter = useCallback((filter: string)=>dispatch(changeFilter(filter)), [dispatch]);
    const filteredTodos = getFilteredTodos(todos, filter);
    return (
        <Todos input={input} todos={filteredTodos} onChangeInput={onChangeInput} onInsert={onInsert}
                onToggle={onToggle} onRemove={onRemove} onClearAll={onClearAll}
                filter={filter} onChangeFilter={onChangeFilter} />
    )
}

export default TodosContainer;



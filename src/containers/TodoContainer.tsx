import React, {useCallback} from "react";
import{useSelector, useDispatch} from "react-redux";
import {changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos, changeFilter, editTodo} from "../actions/todos";
import Todos from "../components/Todos"
import {TodoState} from "../reducers/todos";
import {getFilteredTodos} from "../selectors/todos";

const TodosContainer = () => {
    const {input, todos, filter} = useSelector((state: TodoState)=>({input: state.input, todos: getFilteredTodos(state), filter: state.filter}));
    const dispatch = useDispatch();
    const onChangeInput = useCallback((input: string)=>dispatch(changeTodoInput(input)),[dispatch]);
    const onInsert = useCallback((input: string)=>dispatch(addTodo(input)), [dispatch]);
    const onToggle = useCallback((id: number)=>dispatch(toggleTodoStatus(id)), [dispatch]);
    const onRemove = useCallback((id: number)=>dispatch(removeTodo(id)), [dispatch]);
    const onClearAll = useCallback(()=>dispatch(clearAllTodos()), [dispatch]);
    const onChangeFilter = useCallback((filter: string)=>dispatch(changeFilter(filter)), [dispatch]);
    const onEditTodo = useCallback((id: number, input: string)=>dispatch(editTodo(id, input)), [dispatch]);
    return (
        <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert}
                onToggle={onToggle} onRemove={onRemove} onClearAll={onClearAll}
                filter={filter} onChangeFilter={onChangeFilter} onEditTodo={onEditTodo}/>
    )
}

export default TodosContainer;



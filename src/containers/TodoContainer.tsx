import React from "react";
import { connect } from "react-redux"
import {TodoState, changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos} from "../modules/todos";
import Todos from "../components/Todos";
import {Todo} from "../App";

interface Props{
    readonly input: string;
    readonly todos: Todo[];
    readonly changeTodoInput: (input: string)=>void;
    readonly addTodo: (input: string)=>void;
    readonly toggleTodoStatus: (id: number)=>void;
    readonly removeTodo: (id: number)=>void;
    readonly clearAllTodos: ()=>void
}

const TodosContainer = ({input, todos, changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos}: Props) => {
    return (
        <Todos input={input} todos={todos} onChangeInput={changeTodoInput} onInsert={addTodo}
               onToggle={toggleTodoStatus} onRemove={removeTodo} onClearAll={clearAllTodos}/>
    );
}

//Export component.
export default  connect(
    (state: TodoState)=>({input: state.input, todos: state.todos}),
    {changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos}
)(TodosContainer);



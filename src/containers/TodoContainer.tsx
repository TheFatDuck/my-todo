import React from "react";
import { connect } from "react-redux"
import {Dispatch} from "redux";
import {TodoState, changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos} from "../modules/todos";
import Todos from "../components/Todos";

// Mapping Store into to Props
const mapStateToProps = (state: TodoState) => ({input: state.input, todos: state.todos});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeTodoInput: (input: string) => { dispatch(changeTodoInput(input)); },
    addTodo: (input: string)=>{dispatch(addTodo((input)));},
    toggleTodoStatus: (id: number)=>{dispatch(toggleTodoStatus(id));},
    removeTodo: (id: number)=>{dispatch(removeTodo(id));},
    clearAllTodos: () => { dispatch(clearAllTodos()); }
});

// Define types of typescript.
type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;

// Define props interface
interface Props extends  PropsState, PropsDispatch{}

const TodosContainer = ({input, todos, changeTodoInput, addTodo, toggleTodoStatus, removeTodo, clearAllTodos}: Props) => {
    return (
        <Todos input={input} todos={todos} onChangeInput={changeTodoInput} onInsert={addTodo}
               onToggle={toggleTodoStatus} onRemove={removeTodo} onClearAll={clearAllTodos}/>
    );
}

//Export component.
export default  connect(mapStateToProps, mapDispatchToProps)(TodosContainer);



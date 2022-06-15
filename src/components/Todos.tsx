import {useState, useRef, useCallback} from "react";

import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import {Todo} from "../App";

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");
    const nextId = useRef(1);

    // const onInsertTodo_old = (text: string) => {
    //     const todo = {
    //         id: nextId.current,
    //         text,
    //         done: false
    //     };
    //     //setTodos(todos.concat(todo));
    //     setTodos((todos) => todos.concat(todo)); // Functional update.
    //     nextId.current += 1;
    // };
    const onInsertTodo = useCallback((text: string) => {
        const todo = {
            id: nextId.current,
            text,
            done: false
        };
        setTodos((todos) => todos.concat(todo));
        nextId.current += 1;
    }, []);
    // const onDeleteTodo_old = (id: number) => {
    //     //setTodos(todos.filter((todo)=>{return todo.id !== id;}));
    //     setTodos((todos)=>todos.filter((todo)=>{return todo.id !== id;}));
    // }
    const onDeleteTodo = useCallback((id: number)=>{
        setTodos((todos)=>todos.filter((todo)=>{return todo.id !== id;}));
    }, []);
    // const onToggleDone_old = (id: number) => {
    //     // setTodos(todos.map((todo) => {
    //     //     return todo.id === id ? {...todo, done: !todo.done} : todo;
    //     // }));
    //     setTodos((todos) => todos.map((todo) => {
    //         return todo.id === id ? {...todo, done: !todo.done} : todo;
    //     }));
    // }
    const onToggleDone = useCallback((id: number)=>{
        setTodos((todos)=>todos.map((todo)=>{
            return todo.id === id ? {...todo, done: !todo.done} : todo;
        }));
    }, []);
    // const onClearTodos_old = () => {
    //     //setTodos([]);
    //     setTodos(() => []);
    // }
    const onClearTodos = useCallback(()=>{
        setTodos(()=>[]);
    }, [])
    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }, []);
    const onSubmitTodo = useCallback((e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onInsertTodo(input);
        setInput(()=>"");
    }, [onInsertTodo, input]);

    return(
        <div>
            <TodoHeader/>
            <TodoInput input={input} onChangeInput={onChangeInput} onSubmitTodo={onSubmitTodo}/>
            <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleDone={onToggleDone}/>
            <TodoFooter onClearTodos={onClearTodos}/>
        </div>
    );
};

export default Todos;
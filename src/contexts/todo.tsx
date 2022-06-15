import React, {createContext, useState, useCallback, useRef} from "react";

import {Todo} from "../App"

interface TodoState{
    readonly todos: Todo[];
    readonly input: string;
}

interface TodoAction{
    readonly setTodos: (todos: Todo[])=>void;
    readonly onInsertTodo: (text: string)=>void;
    readonly onDeleteTodo: (id: number)=>void;
    readonly onToggleDone: (id: number)=>void;
    readonly onClearTodos: ()=>void;
    readonly onChangeInput: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    readonly onSubmitTodo: (e: React.FormEvent<HTMLFormElement>)=>void
}

interface Context{
    readonly state: TodoState;
    readonly actions: TodoAction;
}

const TodoContext = createContext<Context>({
    state: {
        todos: [],
        input: ""
    },
    actions: {
        setTodos: (todos: Todo[]): void => {},
        onInsertTodo: (text: string): void => {},
        onDeleteTodo: (id: number): void => {},
        onToggleDone: (id: number): void => {},
        onClearTodos: (): void => {},
        onChangeInput: (e: React.ChangeEvent<HTMLInputElement>): void => {},
        onSubmitTodo: (e: React.FormEvent<HTMLFormElement>): void => {},
    },
});

interface Props{
    children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({children}: Props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");
    const nextId = useRef(1);
    const onInsertTodo = useCallback((text: string) => {
        const todo = {
            id: nextId.current,
            text,
            done: false
        };
        setTodos((todos) => todos.concat(todo));
        nextId.current += 1;
    }, []);
    const onDeleteTodo = useCallback((id: number)=>{
        setTodos((todos)=>todos.filter((todo)=>{return todo.id !== id;}));
    }, []);
    const onToggleDone = useCallback((id: number)=>{
        setTodos((todos)=>todos.map((todo)=>{
            return todo.id === id ? {...todo, done: !todo.done} : todo;
        }));
    }, []);
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
    const value = {
        state: {todos, input},
        actions: {
            setTodos,
            onInsertTodo,
            onDeleteTodo,
            onToggleDone,
            onClearTodos,
            onChangeInput,
            onSubmitTodo,
        },
    };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
};

const {Consumer: TodoConsumer} = TodoContext;

export {TodoProvider, TodoConsumer};

export default TodoContext;
import styles from "../Todo.module.css";
import {Todo} from "../App"
import React, {useState, useEffect} from "react";

interface Props {
    todo: Todo;
    readonly onDeleteTodo: (id: number) => void;
    readonly onToggleDone: (id: number) => void;
    readonly onEditTodo: (id: number, input: string)=>void;
}

const TodoItem = ({todo, onDeleteTodo, onToggleDone, onEditTodo}: Props) => {
    const {id} = todo;
    const editInput: React.RefObject<HTMLInputElement> = React.createRef();
    const [showInput, setShowInput] = useState(false);
    const [inputText, setInputText] = useState("");

    const onDoubleClick = () => {
        setInputText(todo.text);
        setShowInput(true);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setInputText(e.target.value);
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            onEditTodo(id, inputText);
            setShowInput(false);
        }
    };
    const handleBlur = () => {
        setShowInput(false);
    }

    useEffect(()=>{
        if(todo) setInputText(todo.text);
    }, [todo]);
    useEffect(()=>{
        if(editInput.current) editInput.current.focus();
    }, [editInput]);

    return(
        <div className={styles.item}>
            <input type="checkbox" checked={todo.done} onChange={()=>onToggleDone(id)}/>
            {showInput && (<input value={inputText} onChange={onChange} onKeyPress={handleKeyPress} onBlur={handleBlur} ref={editInput}/> )}
            {!showInput && (<span onDoubleClick={onDoubleClick}>{todo.text}</span>)}
            <button onClick={()=>onDeleteTodo(id)}>Delete</button>
        </div>
    );
}

export default TodoItem;
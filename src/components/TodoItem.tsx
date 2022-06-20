import styles from "../Todo.module.css";
import {Todo} from "../App"
import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TodoState} from "../reducers/todos";
import {setEditingId, resetEditingId} from "../actions/todos";

interface Props {
    todo: Todo;
    readonly onDeleteTodo: (id: number) => void;
    readonly onToggleDone: (id: number) => void;
    readonly onEditTodo: (id: number, input: string)=>void;
}

const TodoItem = ({todo, onDeleteTodo, onToggleDone, onEditTodo}: Props) => {
    const {id} = todo;
    const editInput: React.RefObject<HTMLInputElement> = React.createRef();
    const [inputText, setInputText] = useState("");
    const {editingId} = useSelector((state: TodoState)=>({editingId: state.editingId}));
    const showInput = (id===editingId);
    const dispatch = useDispatch();
    const onSetEditingId = useCallback((id: number)=>dispatch(setEditingId(id)), [dispatch]);
    const onResetEditingId = useCallback(()=>dispatch(resetEditingId()), [dispatch]);

    const onDoubleClick = () => {
        onSetEditingId(id);
        setInputText(todo.text);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setInputText(e.target.value);
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            onEditTodo(id, inputText);
            onResetEditingId();
        }
    };
    const handleBlur = () => {
        onResetEditingId();
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
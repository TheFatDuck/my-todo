import styles from "../Todo.module.css";
//import React, {useState} from "react";

interface Props{
    input: string;
    readonly onChangeInput: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    readonly onSubmitTodo:  (e: React.FormEvent<HTMLFormElement>)=>void;
}

const TodoInput = ({input, onChangeInput, onSubmitTodo}: Props) => {
    //// Move to top-level component
    // const [value, setValue] = useState("");
    // const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(() => e.target.value);
    // };
    // const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) =>{
    //     e.preventDefault();
    //     onInsertTodo(value);
    //     setValue(()=>"");
    // };

    return(
        <div className={styles.input}>
            <form onSubmit={onSubmitTodo}>
                <input placeholder="Input todo." value={input} onChange={onChangeInput}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoInput;
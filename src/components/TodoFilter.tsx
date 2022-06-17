import styles from "../Todo.module.css";
import React from "react";

interface Props{
    readonly filter: string;
    readonly onChangeFilter: (input: string)=>void;
};

const TodoFilter = ({filter, onChangeFilter}: Props)=>{
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>)=>{
        onChangeFilter(e.target.value);
    }
    return(
        <div className={styles.filter}>
            <input type="radio" value="ALL" checked={filter==="ALL"} onChange={handleFilter}/> All
            <input type="radio" value="P" checked={filter==="P"} onChange={handleFilter}/> Processing
            <input type="radio" value="D" checked={filter==="D"} onChange={handleFilter}/> Done
        </div>
    );
};

export default TodoFilter;
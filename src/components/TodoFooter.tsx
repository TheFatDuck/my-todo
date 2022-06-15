import styles from "../Todo.module.css";
import {useContext} from "react";
import TodoContext from "../contexts/todo";

const TodoFooter = () => {
    const {actions} = useContext(TodoContext);
    return(
        <div className={styles.footer}>
            <button onClick={actions.onClearTodos}>Delete All</button>
        </div>
    );
};

export default TodoFooter;
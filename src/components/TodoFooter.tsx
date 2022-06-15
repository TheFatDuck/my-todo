import styles from "../Todo.module.css";
import {TodoConsumer} from "../contexts/todo";

const TodoFooter = () => {
    return(
        <TodoConsumer>
        {(value)=>(
            <div className={styles.footer}>
                <button onClick={value.actions.onClearTodos}>Delete All</button>
            </div>
        )}
        </TodoConsumer>
    );
};

export default TodoFooter;
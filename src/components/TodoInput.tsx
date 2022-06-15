import styles from "../Todo.module.css";
import {useContext} from "react";
import TodoContext from "../contexts/todo";

const TodoInput = () => {
    const {state, actions} =  useContext(TodoContext);
    return(
        <div className={styles.input}>
            <form onSubmit={actions.onSubmitTodo}>
                <input placeholder="Input todo." value={state.input} onChange={actions.onChangeInput} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoInput;
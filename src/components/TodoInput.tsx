import styles from "../Todo.module.css";
import { TodoConsumer } from "../contexts/todo";

const TodoInput = () => {
    return(
        <TodoConsumer>
            {(value)=>(
                <div className={styles.input}>
                    <form onSubmit={value.actions.onSubmitTodo}>
                        <input placeholder="Input todo." value={value.state.input} onChange={value.actions.onChangeInput}/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            )}
        </TodoConsumer>
    );
}

export default TodoInput;
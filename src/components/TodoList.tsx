import styles from "../Todo.module.css";
import TodoItem from "./TodoItem";
import { TodoConsumer } from "../contexts/todo";

const TodoList = () => {
    return (
        <TodoConsumer>
            {(value)=>(
                <div className={styles.list}>
                    {
                        value.state.todos.map((todo) => {
                            return (
                                <TodoItem
                                    todo={todo} key={todo.id}
                                    onDeleteTodo={value.actions.onDeleteTodo}
                                    onToggleDone={value.actions.onToggleDone}
                                />
                            );
                        })
                    }
                </div>
            )}
        </TodoConsumer>

    );
};

export default TodoList;
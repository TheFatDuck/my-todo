import styles from "../Todo.module.css";
import TodoItem from "./TodoItem";
import {useContext} from "react";
import TodoContext from "../contexts/todo";

const TodoList = () => {
    const {state, actions} = useContext(TodoContext);
    return (
        <div className={styles.list}>
            {
                state.todos.map((todo) => {
                    return (
                        <TodoItem
                            todo={todo} key={todo.id}
                            onDeleteTodo={actions.onDeleteTodo}
                            onToggleDone={actions.onToggleDone}
                        />
                    );
                })
            }
        </div>
    );
};

export default TodoList;
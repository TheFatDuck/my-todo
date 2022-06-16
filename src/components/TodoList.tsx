import styles from "../Todo.module.css";
import TodoItem from "./TodoItem";
import {Todo} from "../App";

interface Props{
    readonly todos: Todo[];
    readonly onRemove: (id: number)=>void;
    readonly onToggle: (id: number)=>void;
}

const TodoList = ({todos, onRemove, onToggle}: Props) => {
    return (
        <div className={styles.list}>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            todo={todo} key={todo.id}
                            onDeleteTodo={onRemove}
                            onToggleDone={onToggle}
                        />
                    );
                })
            }
        </div>
    );
};

export default TodoList;
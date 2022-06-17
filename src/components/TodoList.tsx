import styles from "../Todo.module.css";
import TodoItem from "./TodoItem";
import {Todo} from "../App";

interface Props{
    readonly todos: Todo[];
    readonly onRemove: (id: number)=>void;
    readonly onToggle: (id: number)=>void;
    readonly onEditTodo: (id: number, input: string)=>void;
}

const TodoList = ({todos, onRemove, onToggle, onEditTodo}: Props) => {
    return (
        <div className={styles.list}>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            todo={todo} key={todo.id}
                            onDeleteTodo={onRemove}
                            onToggleDone={onToggle}
                            onEditTodo={onEditTodo}
                        />
                    );
                })
            }
        </div>
    );
};

export default TodoList;
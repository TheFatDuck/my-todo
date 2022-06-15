import styles from "../Todo.module.css";
import TodoItem from "./TodoItem";
import {Todo} from "../App"

interface Props {
    readonly todos: Todo[];
    readonly onDeleteTodo: (id: number) => void;
    readonly onToggleDone: (id: number) => void;
}

const TodoList = ({todos, onDeleteTodo, onToggleDone}: Props) => {
    return (
        <div className={styles.list}>
            {
                todos.map((todo)=>{
                    return (
                        <TodoItem 
                            todo={todo} key={todo.id}
                            onDeleteTodo={onDeleteTodo}
                            onToggleDone={onToggleDone}
                        />
                    ); 
                })
            }
        </div>
    );
};

export default TodoList;
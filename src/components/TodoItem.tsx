import styles from "../Todo.module.css";
import {Todo} from "../App"


interface Props {
    todo: Todo;
    readonly onDeleteTodo: (id: number) => void;
    readonly onToggleDone: (id: number) => void;
}

const TodoItem = ({todo, onDeleteTodo, onToggleDone}: Props) => {
    const {id} = todo;
    return(
        <div className={styles.item}>
            <input type="checkbox" checked={todo.done} onChange={()=>onToggleDone(id)}/>
            <span>{todo.text}</span>
            <button onClick={()=>onDeleteTodo(id)}>Delete</button>
        </div>
    );
}

export default TodoItem;
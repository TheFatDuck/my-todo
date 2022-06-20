import styles from "../Todo.module.css";
import{useStore} from "react-redux";
import {TodoState} from "../reducers/todos";

interface Props{
    readonly onClearAll: ()=>void;
}
const TodoFooter = ({onClearAll}: Props) => {
    const store = useStore();
    const state = store.getState() as TodoState;
    const data = {
        todos: state.todos,
        nextToId: state.nextToId,
    };
    const onSave = () => {localStorage.setItem("my-todo-app-data", JSON.stringify(data))};
    return(
        <div className={styles.footer}>
            <button onClick={onClearAll}>Delete All</button>
            <button onClick={onSave}>Save Todos</button>
        </div>
    );
};

export default TodoFooter;
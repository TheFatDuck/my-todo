import styles from "../Todo.module.css";

interface Props {
    readonly onClearTodos: () => void;
}

const TodoFooter = ({onClearTodos}: Props) => {
    return(
        <div className={styles.footer}>
            <button onClick={onClearTodos}>Delete All</button>
        </div>
    );
};

export default TodoFooter;
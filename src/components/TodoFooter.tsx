import styles from "../Todo.module.css";

interface Props{
    readonly onClearAll: ()=>void;
}
const TodoFooter = ({onClearAll}: Props) => {
    return(
        <div className={styles.footer}>
            <button onClick={onClearAll}>Delete All</button>
        </div>
    );
};

export default TodoFooter;
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { TodoProvider } from "../contexts/todo";
import {Todo} from "../App";

interface Props{
    readonly input: string;
    readonly filter: string;
    readonly todos: Todo[];
    readonly onRemove: (id: number)=>void;
    readonly onToggle: (id: number)=> void;
    readonly onClearAll: ()=>void;
    readonly onInsert: (input: string)=>void;
    readonly onChangeInput: (input: string)=>void;
    readonly onChangeFilter: (filter: string)=>void;
    readonly onEditTodo: (id: number, input: string)=>void;
}

const Todos = ({input, filter, todos, onRemove, onToggle, onClearAll, onInsert, onChangeInput, onChangeFilter, onEditTodo}: Props) => {
    return(
        <TodoProvider>
            <TodoHeader/>
            <TodoInput input={input} onInsert={onInsert} onChangeInput={onChangeInput}/>
            <TodoFilter filter={filter} onChangeFilter={onChangeFilter}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onEditTodo={onEditTodo}/>
            <TodoFooter onClearAll={onClearAll}/>
        </TodoProvider>
    );
};

export default Todos;
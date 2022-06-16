import React from 'react';
import './App.css';
import TodosContainer from "./containers/TodoContainer";

function App() {
  return <TodosContainer/>
}

export default App;

export interface Todo{
  id: number;
  text: string;
  done: boolean;
}
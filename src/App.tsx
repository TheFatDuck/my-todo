import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return <Todos/>;
}

export default App;

export interface Todo{
  id: number;
  text: string;
  done: boolean;
}
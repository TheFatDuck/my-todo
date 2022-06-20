import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {loadSavedTodos} from "./actions/todos"
import configureStore from "./store";
import todos from "./reducers/todos";

const store = configureStore(todos);
const loadData = () => {
    try{
        const data = localStorage.getItem("my-todo-app-data");
        if(!data) return;
        store.dispatch(loadSavedTodos(JSON.parse(data)));
    }
    catch(e){
        console.error("Failed to load data from local storage.");
    }
}
loadData();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      < Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

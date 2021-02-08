import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/toDoList/ToDoList";
import Filter from './components/Filter';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
     <AddToDo/>
     <TodoList/>
     <Filter/>
    </div>
  );
}

export default App;

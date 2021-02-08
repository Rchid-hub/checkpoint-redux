import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/toDoList/ToDoList";
import Filter from './components/Filter';
import { useState } from 'react';


function App() {
  const [done, setDone] = useState(false);
const [unDone, setUndone] = useState(false);
  return (
    <div className="App">
     <AddToDo/>
     <TodoList done={done} unDone={unDone} />
     <Filter setDone={setDone} setUndone={setUndone} />
    </div>
  );
}

export default App;

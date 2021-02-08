import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../toDoCard/toDoCard";
import './toDoList.css'

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      {todoList.map((todo) => (
        <ul className="todo-list">
          <TodoCard todo={todo} />
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
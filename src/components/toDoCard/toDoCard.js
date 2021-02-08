import React from "react";
import EditTodo from "../EditToDo/EditToDo";
import "./toDoCard.css";

const TodoCard = ({ todo }) => {
  return (
    <div className="todo-card">
      <div class="container">
  <ul class="list-group">
    <li class="list-group-item clearfix">
      <p class="list-group-item-text lead">
        {todo.text}
        <br />
      </p>
      <EditTodo todo={todo} />
      </li>
      </ul>
    </div>
    </div>
  );
};

export default TodoCard;

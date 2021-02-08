import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/Actions/actions";

const AddToDo = () => {

    const [textTodo, setTextTodo] = useState("");

    const dispatch = useDispatch();
  
    const handleAdd = () => {
      const newTodo = {
        text: textTodo,
        id: Math.random(),
        isDone: false,
      };
      dispatch(addTodo(newTodo));
      setTextTodo("");
    };
    return (
        <div>
             <div
      className="app-container d-flex align-items-center justify-content-center flex-column"
      ng-app="myApp"
      ng-controller="myController"
    >
      <h3>To Dos for today</h3>
      <div className="d-flex align-items-center mb-3">
         <div className="form-group mr-3 mb-0">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task here"
            value={textTodo}
            onChange={(e)=>setTextTodo(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mr-3"
          onClick={handleAdd}
        >
          Save
        </button>
        </div>
        </div>
        </div>
    )
}

export default AddToDo

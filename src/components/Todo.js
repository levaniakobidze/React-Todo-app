import React, { useState } from "react";
import "../App.css";
import x from "../assets/x.svg";
import circle from "../assets/circle.svg";

function Todo({
  todos,
  text,
  setTodos,
  id,
  darkMode,
  active,
  filteredTodos,
  setFilteredTodos,
}) {
  const checkHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo.id);
          todo.active = !todo.active;
        }
        return todo;
      })
    );
  };
  const deleteTodo = () => {
    const newTodos = filteredTodos.filter((todo) => todo.id !== id);
    setFilteredTodos(newTodos);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={!darkMode ? "todo" : "todo todo_light"}>
      <div className='todo-item-cont'>
        <div
          className={darkMode ? "checkbox" : "checkbox checkbox_dark"}
          onClick={() => checkHandler(id)}>
          {!active && <img src={circle} alt='circle' />}
        </div>
        <li className={active == true ? "todo-item" : "todo-item non-active"}>
          <h4
            className={`${!darkMode && "dark-text"}
            }`}>
            {text}
          </h4>
        </li>
        <img src={x} alt='x' onClick={deleteTodo} className='delete_btn' />
      </div>
    </div>
  );
}

export default Todo;

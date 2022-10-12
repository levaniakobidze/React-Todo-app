import React, { useState } from "react";
import Todo from "./Todo";
import "../App.css";

function TodoList({
  todos,
  setTodos,
  darkMode,
  filteredTodos,
  setFilteredTodos,
  completed,
  setCompleted,
  activeFilter,
  setActiveFilter,
}) {
  const allClearHandler = () => {
    completed ? setFilteredTodos([]) : setTodos([]);
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
    setCompleted(true);
    setFilteredTodos(todos.filter((todo) => todo.active === false));
  };
  const showActiveTodos = () => {
    setActiveFilter("active");

    setCompleted(true);
    setFilteredTodos(todos.filter((todo) => todo.active === true));
  };

  const showAll = () => {
    setActiveFilter("all");

    setCompleted(false);
  };

  return (
    <div className='list-wrapper'>
      <ul className={darkMode ? "todo-list" : "todo-list-active"}>
        {!completed &&
          todos.map((todo) => {
            return (
              <>
                <Todo
                  key={todo.id}
                  setTodos={setTodos}
                  text={todo.text}
                  id={todo.id}
                  todos={todos}
                  darkMode={darkMode}
                  active={todo.active}
                  filteredTodos={filteredTodos}
                  setFilteredTodos={setFilteredTodos}
                />
              </>
            );
          })}
        {completed &&
          filteredTodos.map((todo) => {
            return (
              <>
                <Todo
                  key={todo.id}
                  setTodos={setTodos}
                  text={todo.text}
                  id={todo.id}
                  todos={todos}
                  darkMode={darkMode}
                  active={todo.active}
                  filteredTodos={filteredTodos}
                  setFilteredTodos={setFilteredTodos}
                />
              </>
            );
          })}
        <div
          className={darkMode ? "list-footer" : "list-footer list-footer-dark"}>
          <h3>{completed ? filteredTodos.length : todos.length} items</h3>

          <div className={!darkMode ? "middle" : "middle middle_light"}>
            <h3
              className={activeFilter === "all" ? "filter_active" : ""}
              onClick={showAll}>
              {" "}
              All{" "}
            </h3>
            <h3
              className={activeFilter === "active" ? "filter_active" : ""}
              onClick={showActiveTodos}>
              {" "}
              Active
            </h3>
            <h3
              className={activeFilter === "completed" ? "filter_active" : ""}
              onClick={showCompletedTodos}>
              {" "}
              Completed
            </h3>
          </div>

          <h3 onClick={allClearHandler}>Clear Completed</h3>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;

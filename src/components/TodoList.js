import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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

  const handleOnDragTodos = (result) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <div className='list-wrapper'>
      <DragDropContext onDragEnd={handleOnDragTodos}>
        <Droppable droppableId='characters'>
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={darkMode ? "todo-list" : "todo-list-active"}>
              {!completed &&
                todos.map((todo, index) => {
                  return (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.text}
                      ref={provided.innerRef}
                      index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
                          <Todo
                            setTodos={setTodos}
                            text={todo.text}
                            id={todo.id}
                            todos={todos}
                            darkMode={darkMode}
                            active={todo.active}
                            filteredTodos={filteredTodos}
                            setFilteredTodos={setFilteredTodos}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              {completed &&
                filteredTodos.map((todo) => {
                  return (
                    <Draggable>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
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
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              <div
                className={
                  darkMode ? "list-footer" : "list-footer list-footer-dark"
                }>
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
                    className={
                      activeFilter === "completed" ? "filter_active" : ""
                    }
                    onClick={showCompletedTodos}>
                    {" "}
                    Completed
                  </h3>
                </div>

                <h3 onClick={allClearHandler}>Clear Completed</h3>
                <span
                  className={
                    !darkMode
                      ? "drag_and_drop"
                      : "drag_and_drop drag_and_drop_dark"
                  }>
                  Drag and drop to reorder list
                </span>
              </div>
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TodoList;

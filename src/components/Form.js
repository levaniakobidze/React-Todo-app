import React, { useState } from "react";
import circle from "../assets/circle.svg";
import "../App.css";

function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  darkMode,
  setCompleted,
}) {
  const [selectAll, setSelectAll] = useState(false);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // setActiveFilter("all");
    setCompleted(false);
    if (e.keyCode === 13 && inputText !== "") {
      setTodos([
        {
          text: inputText,
          id: Math.floor(Math.random(3 * 1000) * 1000),
          active: !selectAll ? true : false,
        },
        ...todos,
      ]);
      // setFilteredTodos([...todos]);
      setInputText("");
    }
  };
  const selectAllHandler = () => {
    setSelectAll(() => !selectAll);
    setTodos(
      todos.map((todo) => {
        todo.active = !todo.active;

        return todo;
      })
    );
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={!darkMode ? "form-dark" : ""}>
      <div
        className={darkMode ? "checkbox" : "checkbox checkbox_dark"}
        onClick={selectAllHandler}>
        {selectAll && <img src={circle} alt='circle' />}
      </div>
      <input
        className={darkMode ? "main-input" : " main-input main-input-dark"}
        onKeyDown={submitTodoHandler}
        onChange={inputTextHandler}
        type='text'
        placeholder='Make a new Todo'
        value={inputText}
      />
    </form>
  );
}

export default Form;

import React from "react";
import "../App.css";

function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  darkMode,
  setCompleted,
  setActiveFilter,
}) {
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
          active: true,
        },
        ...todos,
      ]);
      // setFilteredTodos([...todos]);
      setInputText("");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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

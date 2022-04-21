import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    darkMode
      ? (document.body.style.backgroundColor = "hsl(235, 21%, 11%)")
      : (document.body.style.backgroundColor = "rgb(207, 207, 207)");
  };

  return (
    <div className='main-wrapper'>
      <div className='main-todo-wrapper'>
        <div className='todo-title'>
          <h1>T O D O</h1>
          {darkMode ? (
            <BsFillMoonFill className='moon-icon' onClick={darkModeHandler} />
          ) : (
            <BsFillSunFill className='moon-icon' onClick={darkModeHandler} />
          )}
        </div>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          darkMode={darkMode}
        />
        <TodoList todos={todos} setTodos={setTodos} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileView, setMobileView] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    darkMode
      ? (document.body.style.backgroundColor = "hsl(235, 21%, 11%)")
      : (document.body.style.backgroundColor = "rgb(207, 207, 207)");
  };

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setMobileView(true);
    }
  }, []);

  return (
    <div
      className={darkMode ? "main-wrapper" : "main-wrapper main-wrapper-dark"}>
      <img
        className='bg_img'
        src={require(`../src/images/bg-${!mobileView ? "desktop" : "mobile"}-${
          !darkMode ? "dark" : "light"
        }.jpg`)}
        alt=''
      />
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
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          setCompleted={setCompleted}
          setActiveFilter
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          darkMode={darkMode}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          completed={completed}
          setCompleted={setCompleted}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </div>
  );
}

export default App;

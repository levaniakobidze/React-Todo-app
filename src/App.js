import React,{useState} from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
import {BsFillMoonFill} from 'react-icons/bs'
function App() {
 
  const [inputText, setInputText]=useState('')
  const [todos,setTodos] = useState([])



  

  return (
    <div className="main-wrapper">
    <div className="main-todo-wrapper">
      <div className="todo-title">
        <h1>T O D O</h1>
        <BsFillMoonFill className='moon-icon' />
      </div>
     <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
     <TodoList todos={todos} setTodos={setTodos} />
      
     </div>

    </div>
  );
}

export default App;

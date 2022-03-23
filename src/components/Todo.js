import React,{useState} from 'react'
import '../App.css'
import {AiOutlineClose} from 'react-icons/ai'

function Todo({todos,text,setTodos,id,darkMode}) {
         
   const [activeItem, setActiveItem] = useState(false);

   const checkHandler = () => {
     setActiveItem(!activeItem);
   }
    const deleteTodo =  () => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos)
        console.log(newTodos)
     }
  return (
    <div  className='todo'>
      <div className="todo-item-cont">
      <input type="checkbox" onClick={checkHandler} />
        <li  className={activeItem ? 'todo-item'  : 'todo-item non-active' } >
            {text}
            
            
            </li>
            <AiOutlineClose onClick={deleteTodo} className="delete-icon" /> 
            </div>
     
    </div>
  )
}

export default Todo
import React from 'react'
import '../App.css'
import {AiOutlineClose} from 'react-icons/ai'

function Todo({todos,text,setTodos,id}) {

    const deleteTodo =  () => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos)
        console.log(newTodos)
     }
  return (
    <div  className='todo'>
        <li  className="todo-item">
            {text}
            
            <AiOutlineClose onClick={deleteTodo} className="delete-icon" /> 
            </li>
           
     
    </div>
  )
}

export default Todo
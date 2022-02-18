import React from 'react'
import '../App.css'


function Form({inputText,setInputText,todos,setTodos,darkMode}) {
     const inputTextHandler = (e) => {
      setInputText(e.target.value)
    
     }

     const submitTodoHandler = (e) => {
         if(e.keyCode === 13 && inputText !== ''){
             setTodos([
                {text:inputText,id:Math.random() * 1000}, ...todos 
             ])
             setInputText('')
             
          
         }
        
     }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
    <input className={darkMode ? 'main-input' : ' main-input main-input-dark'} onKeyDown={submitTodoHandler} onChange={inputTextHandler} type="text" placeholder='Make a new Todo' value={inputText}/>
    </form>
  )
}

export default Form
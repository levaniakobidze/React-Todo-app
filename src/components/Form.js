import React from 'react'
import '../App.css'


function Form({inputText,setInputText,todos,setTodos}) {
     const inputTextHandler = (e) => {
      setInputText(e.target.value)
    
     }

     const submitTodoHandler = (e) => {
         if(e.keyCode === 13){
             setTodos([
                {text:inputText,id:Math.random() * 1000}, ...todos 
             ])
             setInputText('')
             
          
         }
        
     }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
    <input  onKeyDown={submitTodoHandler} onChange={inputTextHandler} type="text" placeholder='type here' value={inputText}/>
    </form>
  )
}

export default Form
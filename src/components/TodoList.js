import React from 'react'
import Todo from './Todo'
import '../App.css'

function TodoList({todos,setTodos,darkMode}) {

  const allClearHandler = () => {
    setTodos([])
  }

  return (
    <div className='list-wrapper'>
        <ul className={darkMode ? 'todo-list' : 'todo-list-active'}>
          {todos.map((todo) => {
              return (
                  <>
                  <Todo key={todo.id} setTodos={setTodos} text={todo.text} id={todo.id} todos={todos} darkMode={darkMode}/>
                  
                  
                  </>
              )
              
          })}
          <div className={darkMode ? 'list-footer': 'list-footer list-footer-dark' }>
                      <h3>{todos.length} items</h3>
                      <h3>All</h3>
                      <h3>Active</h3>
                      <h3>completed</h3>
                      <h3 onClick={allClearHandler}>Clear all</h3>
                  </div>
        </ul>
    </div>
  )
}

export default TodoList
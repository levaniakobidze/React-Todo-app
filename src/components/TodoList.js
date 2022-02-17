import React from 'react'
import Todo from './Todo'
import '../App.css'

function TodoList({todos,setTodos}) {
  return (
    <div className='list-wrapper'>
        <ul className='todo-list'>
          {todos.map((todo) => {
              return (
                  <>
                  <Todo key={todo.id} setTodos={setTodos} text={todo.text} id={todo.id} todos={todos}/>
                  
                  
                  </>
              )
              
          })}
          <div className="list-footer">
                      <h3>{todos.length} items</h3>
                      <h3>All</h3>
                      <h3>Active</h3>
                      <h3>completed</h3>
                      <h3>Clear all</h3>
                  </div>
        </ul>
    </div>
  )
}

export default TodoList
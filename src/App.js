import React,{useState} from 'react'
import './App.css';

function App() {
  const [value,setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value)

  }

 

  
  const onKeyDown = (e) => {
    if(e.key === 'Enter'){
     setValue('');
    }
  }
  

  

  return (
    <div className="main-wrapper">
    <div className="main-todo-wrapper">
      <div className="todo-title">
        <h1>T O D O</h1>
        <i class="fas fa-moon"></i>
      </div>
      <div className="input-div">
        <input  type="text" placeholder='type here' value={value} onChange={onChange} onKeyDown={onKeyDown}/>
        </div>
      <div className="list-wrapper">

      </div>
    </div>

    </div>
  );
}

export default App;

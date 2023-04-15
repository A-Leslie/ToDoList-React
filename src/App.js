import "./App.css"
import {useState} from "react"

function App(){ 
  const[todoList,setTodoList]=useState([]);
  const [newTask,setNewtask]=useState("");

  const handleChange=(event)=>{
    setNewtask(event.target.value)
    
  };
  const Addtask =()=>{
    const task={
      id:todoList.length === 0 ? 1 : todoList[todoList.length-1]+1,
      taskName:newTask
    }
   const newtodolist=[...todoList,task]
   setTodoList(newtodolist);
  }
  const deletetask =(id) =>{
    const newTodolist=todoList.filter((task)=> task.id !== id)
    setTodoList(newTodolist)
  } 
  return(
   
  <div className="App"> 
  <h1>To Do List</h1>
   <div className="addTask">
   
    <input onChange={handleChange}/>
    <button onClick={Addtask}>Add Task</button>
   </div>
   <div className="list">
  {todoList.map((task)=>{
    return <div>
       <h1>{task.taskName}<button onClick={ ()=>deletetask(task.id)} className="delete">x</button> </h1> 
       
    </div>
  })}
   </div>
  </div>
  )
}

export default App;
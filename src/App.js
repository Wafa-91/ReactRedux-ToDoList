
import { useDispatch,useSelector} from 'react-redux';
import './App.css';
import {addTask} from './Redux/actions/TodoAction'
import TodoTask from './components/TodoTask';
import React, { useState} from 'react'
import { IoIosAddCircle} from "react-icons/io"
import {Button} from'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
 //njibou biha state ml reducer 
const todoTab = useSelector(state => state.todoTab)

 // njibou biha el function
 const dispatch = useDispatch()

// creaction mta3 state jdida
 const [NewTask, setNewTask] = useState("");
 const [status, setstatus] = useState("all");

 const weekday=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"]
    let day=weekday[new Date().getDay()]
    let dt=new Date().toLocaleDateString();
    let time=new Date().toLocaleTimeString();


  return (
    <div className="App">
   
      <img src="/imgredux.png" ></img>

<section>
    <div className="AddTask"> 
    <p>{day} :{dt}</p>
    <p>{time}</p>
    <input type="text"  placeholder="Enter New task... " value={NewTask} onChange={(e)=>setNewTask(e.target.value)} style={{ width:250}}/>
    <button style={{ color: "green" }} onClick={()=>{if(NewTask !==""){dispatch(addTask({id:Math.random(),task:NewTask,isDone:false}));setNewTask("")}else {alert('Task is empty')}}}>< IoIosAddCircle/></button>
    </div>



    <div className="All" style={{marginTop:20}}> 
    <Button variant="danger" onClick={(e)=>setstatus("all")} >All</Button>{' '}
  <Button variant="success" onClick={(e)=>setstatus("done")}>Done</Button>{' '}
  <Button variant="warning" onClick={(e)=>setstatus("notdone")}>Not Done</Button>{' '}
    </div>
     
     <div className="listTask">
     <ul>
       {status=="done"?todoTab.filter(el=>el.isDone).map(el=> <TodoTask tasktodo={el}/>):status=="notdone"?todoTab.filter(el=>!el.isDone).map(el=> <TodoTask tasktodo={el}/>):todoTab.map(el=> <TodoTask tasktodo={el}/>)}
       {/* {todoTab.map(el=> <TodoTask tasktodo={el}/>)} */}
     </ul>
     </div>
     </section>
    </div>
  );
}

export default App;

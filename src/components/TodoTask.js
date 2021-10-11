import React,{useState}  from 'react'
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { useDispatch} from 'react-redux';
import { deleteTask, doneTask} from '../Redux/actions/TodoAction';
import EditModal from './EditModal';

function TodoTask({tasktodo}) {

 
    
const dispatch = useDispatch()

    return (
        <div style={{display:"flex",marginBottom:10,justifyContent:"center"}}>
            
            <input value={tasktodo.task} style={{textDecoration:tasktodo.isDone?"line-through red ":"none"}} />
            <button onClick={()=>dispatch(doneTask(tasktodo.id))} style={{color:tasktodo.isDone?"red":"green"}}><IoCheckmarkDoneSharp /></button>
           <EditModal tasktodo={tasktodo}/>
      <button style={{color:"red"}} onClick={()=>dispatch(deleteTask(tasktodo.id))}><IoClose /></button>
        </div>
    )
}

export default TodoTask

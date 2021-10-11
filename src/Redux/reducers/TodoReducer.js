// import type actions
import {ADD_TASK,DELETE_TASK,EDIT_TASK,DONE_TASK} from '../constants/TodoConst'

// initialstate

const InitialState={ todoTab:[{id:Math.random(),task:"Shopping",isDone:false},{id:Math.random(),task:"Sport",isDone:true},{id:Math.random(),task:"Learning",isDone:false}]}

//creation reducer


const TodoReducer = (state=InitialState,{type,payload}) => {
  switch (type) {
      case ADD_TASK: return {...state,todoTab:[...state.todoTab,payload]}
                    
      case DELETE_TASK: return {...state,todoTab:state.todoTab.filter(el=>el.id!==payload)}  
        
      case EDIT_TASK:
          return{...state,todoTab:state.todoTab.map(el=>el.id===payload.id?{...el,task:payload.task}:el)}
     
    case DONE_TASK:
            return{...state,todoTab:state.todoTab.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)}
         
           
      default:
          return state;
  }
}

export default TodoReducer


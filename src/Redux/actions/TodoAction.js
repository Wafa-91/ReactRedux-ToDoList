// import typeactions(constants)
import {ADD_TASK,EDIT_TASK,DELETE_TASK,DONE_TASK} from '../constants/TodoConst'

export const addTask=(newTask)=>{ return {type:ADD_TASK,payload:newTask}}
export const deleteTask=(payload)=>{ return {type:DELETE_TASK,payload}}
export const editTask=(payload)=>{return {type:EDIT_TASK,payload}}
export const doneTask=(payload)=>{return {type:DONE_TASK,payload}}
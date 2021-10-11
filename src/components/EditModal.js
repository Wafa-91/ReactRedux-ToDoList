import React,{useState}  from 'react'
import { AiFillEdit } from "react-icons/ai";
import { useDispatch} from 'react-redux';
import {editTask} from '../Redux/actions/TodoAction';
import { Modal,Button  } from 'react-bootstrap';

function EditModal({tasktodo}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
const dispatch = useDispatch()
const [EditTask, setEditTask] = useState(tasktodo.task);
    return (
        <div>
            <button  onClick={handleShow}> <AiFillEdit /></button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body><input value={EditTask}  onChange={(e)=>setEditTask(e.target.value)}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editTask({id:tasktodo.id,task:EditTask}));handleClose()}}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EditModal

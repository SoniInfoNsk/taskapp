import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Createtask from '../Modals/Createtask'

function Tasklist() {
 
   const [modal, setModal] = useState(false)

   const toggle =() =>{

    setModal(!modal);
   }

    return (
        <div>
            <div className='header text-center'>
                <h3>Task List</h3>
                <Button variant="primary" className='buttoncontainer' onClick={()=> setModal(true)}>Create Task </Button>{' '}
            </div>
            <div className='task-container'>




            </div>
            <Createtask modal={modal} toggle={toggle}/>
        </div>




    )
}

export default Tasklist
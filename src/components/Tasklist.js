import React, { useEffect, useState } from 'react'
import { Button,  } from 'react-bootstrap'
import Createtask from '../Modals/Createtask'
import Card from 'react-bootstrap/Card';




function Tasklist() {
 
   const [modal, setModal] = useState(false)
   const [tasklist, setTasklist] = useState([])


   
   

   const toggle =() =>{

    setModal(!modal);
   }

   const saveTask = (taskobj ) =>{
      let tempList= tasklist
       tempList.push(taskobj)      
       setTasklist(tempList)
       setModal(false)
   }

    return (
        <div>
            <div className='header text-center'>
                <h3>Task List</h3>
                <Button variant="primary" className='buttoncontainer' onClick={()=> setModal(true)}>Create Task </Button>{' '}
            </div>
            <div className='task-container'>

              { tasklist.map ((obj)=> 
              
              <div>
                     <Card style={{ width: '18rem' }}>
      <Card.Body>
        
           {obj.Name}
         
      </Card.Body>
    </Card>
              </div>
               )}


            </div>
            <Createtask modal={modal} toggle={toggle} save= {saveTask}/>
        </div>




    )
}

export default Tasklist
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Createtask from '../Modals/Createtask'

function Tasklist() {
 
   const [modal, setModal] = useState(false)
   const [tasklist, setTasklist] = useState([])


   useEffect(() => {
    
    let arr = localStorage.getItem ("tasklist")
    
    if(arr){
        let obj = JSON.parse (arr)
        setTasklist(obj)
    }

   }, [third])
   

   const toggle =() =>{

    setModal(!modal);
   }

   const saveTask = (taskobj ) =>{
      let tempList= tasklist
       tempList.push(taskobj)
       localStorage.setItem("tasklist",JSON.stringify(tempList))
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

              {tasklist.map ((obj)=> <li>{obj.Name} </li>)}


            </div>
            <Createtask modal={modal} toggle={toggle} save= {saveTask}/>
        </div>




    )
}

export default Tasklist
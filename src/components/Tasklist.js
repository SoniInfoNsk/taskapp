import React, { useEffect, useState } from 'react'
import { Button, } from 'react-bootstrap'
import Createtask from '../Modals/Createtask'
import Card from './Card'




function Tasklist() {

    const [modal, setModal] = useState(false)
    const [tasklist, setTasklist] = useState([])
   
     

    
    
    useEffect(()=>{
        let arr = localStorage.getItem("tasklist")
        

        if (arr) {
            let obj = JSON.parse (arr)
            setTasklist(obj)
        } 
    },[])

    const deleteTask =(index) =>{
      let templist = tasklist
       templist.splice (index, 1)
       localStorage.setItem("tasklist", JSON.stringify(templist))
       setTasklist(templist)
       window.location.reload()
    }
 
    const toggle = () => {

        setModal(!modal);
    }

    const saveTask = (taskobj) => {
        let tempList = tasklist
        tempList.push(taskobj)
        localStorage.setItem("tasklist",JSON.stringify(tempList) )
        setTasklist(tempList)
        setModal(false)
    }

    return (
        <div>
            <div className='header text-center'>
                <h3>Task List</h3>
                <Button variant="primary" className='buttoncontainer' onClick={() => setModal(true)}>Create Task </Button>{' '}
            </div>
            <div className='task-container'>

                {tasklist.map((obj,index) => <Card taskobj={obj} index={index}  deleteTask={deleteTask}/>

                    
                )}


            </div>
            <Createtask modal={modal} toggle={toggle} save={saveTask} />
        </div>




    )
}

export default Tasklist
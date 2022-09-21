import React, { useEffect, useState } from 'react'
import { Button, } from 'react-bootstrap'
import Createtask from '../Modals/Createtask'





function Tasklist() {

    const [modal, setModal] = useState(false)
    const [tasklist, setTasklist] = useState([])
    const [bgtask,setBgtask] = useState("#31E1F7")
     

    const bgtaskchange =() =>{
       
       let newbgtask = "#C3F8FF"
        setBgtask (newbgtask)
    }
    
    useEffect(()=>{
        let arr = localStorage.getItem("tasklist")
        

        if (arr) {
            let obj = JSON.parse (arr)
            setTasklist(obj)
        } 
    },[])



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

                {tasklist.map((obj) =>

                    <div className='taskbox' style={{backgroundColor:bgtask}}>

                        <li style={{ color: '#008CBA' }}> Task name : {obj.Name}</li>
                        <li style={{ color: '#008CBA' }}> Description :{obj.Description}</li>

                    </div>
                )}


            </div>
            <Createtask modal={modal} toggle={toggle} save={saveTask} />
        </div>




    )
}

export default Tasklist
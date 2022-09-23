import React, { useState ,useEffect} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTask from '../Modals/EditTask';



function Card({taskobj, index,deleteTask , updateListArray}) {
    const [modal,setModal] = useState(false)
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]


    const toggle = () =>{
       setModal(!modal)

    }

    const updateTask = (obj) =>{
       updateListArray (obj,index)

    }
    const handleDelete = () => {
        
        deleteTask(index)

    }
  return (
    <div className='taskbox' style={{"backgroundColor":colors[index%5].primaryColor}}>

    <ul>
        <li style={{ color: 'white' }}>Task Name: {taskobj.Name}</li>
        <li style={{ color: 'white' }}> Description :{taskobj.Description}</li>
        <EditIcon className='editicon' onClick ={()=> setModal(true)} />
        <DeleteIcon className='deleteicon' onClick={handleDelete}/>
       
    </ul>
   
    <EditTask modal={modal} toggle={toggle} updateTask={updateTask}  taskobj ={taskobj}/>
 
    </div>
  )
}

export default Card
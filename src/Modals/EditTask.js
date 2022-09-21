
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function EditTask({ modal, toggle , updateTask, taskobj}) {

     const [taskname, setTaskname] = useState('')
     const [description, setDescription] = useState('')
     

    const handlechange = (e) => {
       const {name ,value} = e.target ;

       if(name === "taskName"){
         setTaskname(value)
       } else {
        setDescription(value)
       }
    }

   

    const handleUpdate = (e) =>{
     e.preventDefault();
     let tempobj = {}
     tempobj["Name"] = taskname
     tempobj["Desciption"] = description
     updateTask (tempobj);

    }

    useEffect(() => {
     setTaskname(taskobj.Name)
     setDescription(taskobj.Description)
    }, [])
    

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Upadate Task </ModalHeader>
            <ModalBody>
                <form >
                    <div>
                        <label> Task Name</label>
                        <input type='text' className='inputstyle' value={taskname} onChange={handlechange} name ="taskName"/>
                    </div>
                    <div>
                    <label>Description</label>
                     <textarea rows ='5' className='textarea' value={description} onChange={handlechange} name="description"> </textarea>
                    </div>
                    <div>
                    <label>Date of Creation</label> <br/>
                    <input type="date" onChange={handlechange} />
                    </div>
                    <div>
                    <label> Date of Updation</label><br/>
                    <input type="date" onChange={handlechange}/>
                    </div>
                    <div>
                    <label> End Date of the Task </label><br/>
                    <input type="date" onChange={handlechange}/>
                    </div>
                    <div>
                    <label> Status of the Task </label> <br/>
                   
                    <select >
                        <option>Incomplete</option>
                        <option>Inprogress</option>
                        <option>Completed</option>
                    </select>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>
                   Update
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditTask

import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Createtask({ modal, toggle }) {

     const [taskname, setTaskname] = useState('')
     const [description, setDescription] = useState('')

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Create Task </ModalHeader>
            <ModalBody>
                <form>
                    <div>
                        <label> Task Name</label>
                        <input type='text' className='inputstyle' value={taskname}/>
                    </div>
                    <div>
                    <label>Description</label>
                     <textarea rows ='5' className='textarea' value={description}> </textarea>
                    </div>
                    <div>
                    <label> Date of creation</label>
                     <textarea rows ='5' className='textarea' value={''}> </textarea>
                    </div>
                    <div>
                    <label> Date of Updation</label>
                     <textarea rows ='5' className='textarea' value={''}> </textarea>
                    </div>
                    <div>
                    <label> End date of the task </label>
                     <textarea rows ='5' className='textarea' value={''}> </textarea>
                    </div>
                    <div>
                    <label> Status of the task </label>
                     <textarea rows ='5' className='textarea' value={''}> </textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default Createtask
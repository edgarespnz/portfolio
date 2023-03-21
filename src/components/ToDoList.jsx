import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

let allTasks = [];
let allTasksEditStatus = [];

function ToDoList() {

    const [task, setTask] = useState('')
    const [isToggled, setIsToggle] = useState(false)
    const [show, setShow] = useState(false)
    const [editedTask, setEditedTask] = useState('')

    const HandleAddTask = () => {
        if (task !== '') {
            allTasks.push(task);
            allTasksEditStatus.push(false);
            setIsToggle(!isToggled)
        }
        else {
            setShow(true)
        }
    }

    const removeTask = (key) => {
        const allTasksAux = [];
        const allTasksEditStatusAux = [];
        for (let index = 0; index < allTasks.length; index++) {
            if (index !== key) {
                allTasksAux.push(allTasks[index])
                allTasksEditStatusAux.push(allTasksEditStatus[index]);
            }
        }
        allTasks = allTasksAux
        allTasksEditStatus = allTasksEditStatusAux;
        setIsToggle(!isToggled)
    }

    const displayEditMode = (currentId) => {
        return (
            <InputGroup style={{ maxWidth: '45rem', margin: '1rem' }}>
                <Form.Control placeholder="Insert Updated to do" onChange={(evt) => (setEditedTask(evt.target.value))} />
                <Button variant="warning" onClick={() => HandleEditTask(currentId)}     >
                    Update the item
                </Button>
            </InputGroup>
        );
    }

    const handleEditMode = (currentId) => {
        allTasksEditStatus[currentId] = true;
        setIsToggle(!isToggled)
    }

    const HandleEditTask = (currentId) => {
        allTasks[currentId] = editedTask;
        setIsToggle(!isToggled)
        allTasksEditStatus[currentId] = false;
    }

    return (

        <Container>
            <Form style={{ margin: '2rem', minWidth: '200px', minHeight: '250px', maxHeight: 'fit-content', maxWidth: '80rem', backgroundColor: 'currentColor', padding: '1.5rem', borderRadius: '15px' }}>
                <Form.Group className="mb-3" style={{ textAlign: 'center' }}>
                    <Form.Label style={{ color: 'White', fontSize: 'xxx-large', textTransform: 'uppercase', fontWeight: 'bold' }}> To Do List</Form.Label>
                </Form.Group>
                <Form.Text className='text-muted' style={{ fontSize: 'x-large' }}>¿What are we going to do today?</Form.Text>
                {show ? <Alert variant='danger' onClose={() => setShow(false)} style={{ marginTop: '1rem', maxWidth: '45rem' }} dismissible>The task cannot be empty!</Alert> : null}
                <InputGroup style={{ maxWidth: '45rem', marginTop: '1rem' }}>
                    <Form.Control placeholder="Insert new to do" onChange={(evt) => (setTask(evt.target.value))} />
                    <Button variant="outline-secondary" onClick={() => HandleAddTask()}     >
                        Add to the list
                    </Button>
                </InputGroup>

                <ListGroup as='ol' numbered style={{ marginTop: '1rem', maxWidth: '45rem' }}>
                    {allTasks.map((eachTask, index) => {
                        return (
                            <ListGroup.Item variant="success" style={{ overflow: 'auto' }}>
                                {eachTask}
                                <Container style={{ marginTop: '0.5rem' }}>
                                    {allTasksEditStatus[index] === true ? displayEditMode(index) : null}
                                    <Button id={'edit-' + index} onClick={() => (handleEditMode(index))} style={{ marginRight: '0.5rem' }}>Edit</Button>
                                    <Button id={'remove-' + index} variant="danger" onClick={() => removeTask(index)}>Remove</Button>
                                </Container>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Form>
        </Container>
    );
}

export default ToDoList;
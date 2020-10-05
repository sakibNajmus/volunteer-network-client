import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Task.css'

const Task = ({task}) => {

    const history = useHistory();

    const handleRegister = () =>{
        history.push(`/register/${task.id}`)
    }
    return (
        <div class="col-md-3 task-list">
                <Link onClick={handleRegister}><img src={require (`../../images/${task.image}`)} alt=""/></Link>
                <div class="task-title">
                    <Link onClick={handleRegister}><h5>{task.name}</h5></Link>
                </div>
        </div>
    );
};

export default Task
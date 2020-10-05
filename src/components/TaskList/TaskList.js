import React, { useContext, useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const TaskList = () => {

    const [registrations, setRegistrations] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [id, setId] = useState();

    useEffect( () => {
        fetch('https://floating-garden-96803.herokuapp.com/tasklist?email='+loggedInUser.email,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json', 
            }
        })
        .then(res => res.json())
        .then(data => {
            setRegistrations(data)
        })
    }, [id])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://floating-garden-96803.herokuapp.com/taskdelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted successfully')
                setId(data);
            })
    }

    const registration = registrations.map(reg => {
        const { _id, image, eventName} = reg;
        return (
            <div class="card d-flex float-left" style={{ width: '48%', margin: '10px' }}>
            <img  src={require (`../../images/${image}`)} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-text">{eventName}</h3>
            </div>
            <div class="d-flex align-items-end flex-column">
                <div class="mt-auto p-2">
                        <button class="btn btn-primary" onClick={() => handleDelete(_id)}>Cancel</button>
                </div>

            </div>
            </div>
        )
    })

    return (
        <div>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                        <Link class="navbar-brand" to="/"><img class="img-fluid w-25" src={logo} alt=""/></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link">Home</Link>
                            </li>

                            <li class="nav-item">
                            <Link to="/" class="nav-link">Donation</Link>
                            </li>

                            <li class="nav-item">
                            <Link to="/" class="nav-link">Events</Link>
                            </li>

                            <li class="nav-item">
                            <Link to="/" class="nav-link">Blog</Link>
                            </li>

                            <li class="nav-item">
                            <Link to="/" class="nav-link">{loggedInUser.name}</Link>
                            </li>
                        </ul>
                    </div>
                    </nav>
                    
                    <div class="row">
                        <div class="col-md-12">
                            {registration}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default TaskList;
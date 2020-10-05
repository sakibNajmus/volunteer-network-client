import React, { useContext, useState } from 'react';
import './Register.css'
import logo from '../../logos/Group 1329.png'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { UserContext } from '../../App';

const Register = () => {
    const {taskId} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const taskList = fakeData;
    
    const taskDetails = taskList.filter(task => task.id == taskId)
    const {name, image} = taskDetails[0];
    const newTask = {eventName: name, image};

    const history = useHistory();
    const location = useLocation();

    // date:new Date().toDateString()

    const handleDateChange = (date) =>{
        let newDate = {...selectedDate}
        newDate = date;
        console.log(newDate)
        setSelectedDate(newDate);
    }

    const handleRegistration = () =>{
        const newRegistration = {...loggedInUser, ...newTask, ...selectedDate}
        fetch('https://floating-garden-96803.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            history.replace('/tasklist');
        })
    }

    return (
        <div class="register-bg">            
            <div class="container">                                
                <div class="head-logo">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </div>

                <div class="row">
                    <div class="col-md-3">

                    </div>

                    <div class="col-md-6 registration-form">
                        <form action="">
                            <h3 class="mb-3">Register as a Volunteer</h3>
                            <input type="text" name="" class="form-control mb-3" value={loggedInUser.name} id=""/>
                            <input type="email" name="" class="form-control mb-3" value={loggedInUser.email} id=""/>
                            <input type="date" name="" class="form-control mb-3" onChange={handleDateChange} id=""/>
                            <input type="text" name="" class="form-control mb-3" placeholder="Description" id=""/>
                            <input type="text" name="" class="form-control mb-3" value={name} id=""/>
                        </form>
                            <button onClick={handleRegistration} class="btn btn-primary form-control">Registration</button>
                    </div>

                    <div class="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
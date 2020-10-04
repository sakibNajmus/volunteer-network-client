import React from 'react';
import './Register.css'
import logo from '../../logos/Group 1329.png'
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const Register = () => {
    const {taskId} = useParams();

    const taskList = fakeData;
    
    const taskDetails = taskList.filter(task => task.id == taskId)
    const {name} = taskDetails[0]; 

    return (
        <div class="register-bg">            
            <div className="container">                                
                <div className="head-logo">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </div>

                <div className="row">
                    <div className="col-md-3">

                    </div>

                    <div className="col-md-6">
                        <form action="" class="registration-form">
                            <h3 class="mb-3">Register as a Volunteer</h3>
                            <input type="text" name="" class="form-control mb-3" placeholder="Full Name" id=""/>
                            <input type="email" name="" class="form-control mb-3" placeholder="Username or Email" id=""/>
                            <input type="date" name="" class="form-control mb-3" placeholder="Date" id=""/>
                            <input type="text" name="" class="form-control mb-3" placeholder="Description" id=""/>
                            <input type="text" name="" class="form-control mb-3" value={name} id=""/>
                            <button class="btn btn-primary form-control">Registration</button>
                        </form>
                    </div>

                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import './Header.css'
import banner from '../../images/banner.jpg'
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Task from '../Task/Task';

const Header = () => {

    const taskList = fakeData;
    const [tasks, setTasks] = useState(taskList);
    return (
        <div>
            <div className="banner">
                <img class="img-fluid" src={banner} alt=""/>
            </div>

            <div className="container menu-item">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#"><img class="img-fluid w-25" src={logo} alt=""/></a>
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
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <Link to="/register/1" class=""><button class="btn btn-primary my-2 my-sm-0 mr-3" type="submit">Register</button></Link>
                        <Link to="/"><button class="btn btn-dark my-2 my-sm-0" type="submit">Admin</button></Link>
                    </form>
                </div>
                </nav>
                <div className="search-box">
                    <h2>I grow by helping people in need.</h2>
                    <form action="">
                        <input type="text" name="" placeholder="Search..." id=""/><button class="btn btn-primary search-button">Search</button>
                    </form>
                </div>

                <div className="row">
                    {
                        tasks.map(task => <Task task={task}></Task>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
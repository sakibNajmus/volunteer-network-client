import React from 'react';
import banner from '../../images/banner.jpg'
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>            
            <div class="banner">
                <img class="img-fluid" src={banner} alt=""/>
            </div>

            <div class="container menu-item">
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
                        <Link to="/nomatch" class="nav-link">Donation</Link>
                        </li>

                        <li class="nav-item">
                        <Link to="/nomatch" class="nav-link">Events</Link>
                        </li>

                        <li class="nav-item">
                        <Link to="/nomatch" class="nav-link">Blog</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <Link to="/register/1" class=""><button class="btn btn-primary my-2 my-sm-0 mr-3" type="submit">Register</button></Link>
                        <Link to="/"><button class="btn btn-dark my-2 my-sm-0" type="submit">Admin</button></Link>
                    </form>
                </div>
                </nav>
                <div class="search-box">
                    <h2>This Page is Under Construction...</h2>                    
                </div>
            </div>
        </div>
    );
};

export default NoMatch;
import React from 'react';
import './Login.css'
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import google from '../../logos/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
          const {displayName, email} = res.user;
          const signedInUser = {
            name: displayName,
            email: email
          };
          console.log(signedInUser);
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
    }

    return (
        <div class="login-bg">            
            <div className="container">                                
                <div className="head-logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="row">
                    <div className="col-md-3">

                    </div>

                    <div className="col-md-6">
                        <form action="" class="login-form">
                            <h3 class="mb-3">Login With</h3>
                            <div className="login-alternative">
                                <button onClick={handleGoogleSignIn}><img src={google} alt=""/> Continue with Google</button>
                            </div>
                            <p>Don't have an account? <Link to="/login">Create an Account</Link></p>
                        </form>
                    </div>

                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
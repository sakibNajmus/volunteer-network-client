import React, { useContext } from 'react';
import './Login.css'
import logo from '../../logos/Group 1329.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../logos/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const GoogleAuth = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(GoogleAuth)
        .then(res => {
            const {displayName, email} = res.user;
            const signedInUser = {name: displayName, email: email};
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from)
          })
          .catch(err => {
            console.log(err);
            console.log(err.message);
          });
    }
    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token',idToken);
        }).catch(function (error) {
            // Handle error
        });
    }

    return (
        <div class="login-bg">            
            <div class="container">                                
                <div class="head-logo">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </div>

                <div class="row">
                    <div class="col-md-3">

                    </div>

                    <div class="col-md-6">
                        <div class="login-form">
                            <h3 class="mb-3">Login With</h3>
                            <div class="login-alternative">
                                <button onClick={handleGoogleSignIn}><img src={google} alt=""/>Continue with Google</button>
                            </div>
                            <p>Don't have an account? <Link to="/">Create an Account</Link></p>
                        </div>
                    </div>

                    <div class="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
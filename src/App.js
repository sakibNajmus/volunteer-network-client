import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import TaskList from './components/TaskList/TaskList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        
        <Route exact path="/">
          <Home></Home>
        </Route>

        <PrivateRoute path="/register/:taskId">
          <Register></Register>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/nomatch">
          <NoMatch></NoMatch>
        </Route>

        <Route path="/tasklist">
          <TaskList></TaskList>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

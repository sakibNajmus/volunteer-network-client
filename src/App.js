import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/register/:taskId">
          <Register></Register>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/tasklist">
          <TaskList></TaskList>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

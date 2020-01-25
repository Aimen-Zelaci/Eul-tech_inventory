import React from 'react';
import './App.css';
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';
import Login from "./auth-0/Login";

function App() {
    return (
        <Switch>
            <Route  path='/home' component={Home}/>
            <Route exact path='/' component={Login}/>
        </Switch>

  )
}

export default App;

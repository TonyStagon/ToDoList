// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Registration / > }
        /> <
        Route path = "/home"
        element = { < Home / > }
        /> <
        Route path = "/profile"
        element = { < Profile / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;
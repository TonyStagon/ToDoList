// src/components/Registration.js
import React, { useState } from 'react';
import './Registration.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save user credentials to local storage
        localStorage.setItem('user', JSON.stringify({ username, password }));
        navigate('/login'); // Redirect to login page after registration
    };

    return ( <
        div >
        <
        h1 > Registration Page < /h1> <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value)
        }
        placeholder = "Username"
        required /
        >
        <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        placeholder = "Password"
        required /
        >
        <
        button type = "submit" > Register < /button> < /
        form > <
        /div>
    );
};

export default Registration;
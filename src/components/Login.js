// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS file

const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();
            const user = JSON.parse(localStorage.getItem('user'));

            if (!user) {
                setError('No registered user found. Please register first.');
                return;
            }

            if (user.username === username && user.password === password) {
                navigate('/home'); // Redirect to home page on successful login
            } else {
                setError('Invalid username or password');
            }
        };

        return ( <
            div className = "login-container" >
            <
            h1 > Login Page < /h1> {
                error && < p className = "error" > { error } < /p>} <
                    form onSubmit = { handleSubmit } >
                    <
                    input
                type = "text"
                value = { username }
                onChange = {
                    (e) => setUsername(e.target.value) }
                placeholder = "Username"
                required
                    /
                    >
                    <
                    input
                type = "password"
                value = { password }
                onChange = {
                    (e) => setPassword(e.target.value) }
                placeholder = "Password"
                required
                    /
                    >
                    <
                    button type = "submit" > Login < /button> <
                    /form> <
                    p > Don 't have an account? <a href="/">Register</a></p> <
                    /div>
            );
        };

        export default Login;
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( <
        nav >
        <
        Link to = "/" > Login < /Link> <
        Link to = "/register" > Register < /Link> <
        Link to = "/home" > Home < /Link> <
        Link to = "/profile" > Profile < /Link> <
        /nav>
    );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import './nav.css';
const Nav = () => {
   
    const[show, handleShow] = useState(false);

    useEffect(() =>{
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.addEventListener("scroll");
    }
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>

            <img 
            className="nav-avatar" src="https://lh3.googleusercontent.com/proxy/WELDbkSgkUGuExYb64k6L-cF1G090kXK3re4kofVQdufBXC-0jbH9dQDZHA7Jt-1udEr3G295F_A9VUEVyslK6m-FNVm8P-yMvzVK7B75G3WOaZPCA" alt=""/>
        </div>
    );
};

export default Nav;
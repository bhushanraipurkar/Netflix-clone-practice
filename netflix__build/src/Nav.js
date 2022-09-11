import React, { useEffect, useState } from 'react';
import "./nav.css";
import {NavLink} from "react-router-dom"

function Nav() {
    const [ show , setShow ] = useState(false);

    const transitionHandle = () => {
        if (window.scrollY > 100)
            setShow(true);
        else 
            setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionHandle);
        return () => window.removeEventListener("scroll",transitionHandle)
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                <NavLink to={"/home"}>
            <img
            className='nav__logo'
            src='https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png'
            alt='sample logo'
            />
            </NavLink>
            <img
            className='nav__avatar'
            src='https://i.pinimg.com/474x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6--vini-cata.jpg'
            alt='avatar'
            />
            </div>
        </div>
    )
}

export default Nav

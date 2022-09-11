import React, { useEffect, useState } from 'react';
import "./enterscreen.css";
import {NavLink} from "react-router-dom";


function EnterScreen() {

    return (
        <header className='loginScreen'
        style={{
            backgroundImage:`url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}>
             <img
            className='main__logo'
            src='https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png'
            alt='sample logo'
            />
           

            <div className='loginScreen__gradient'/>

            <div className="loginScreen__body">
                <>
                <h1>Unlimited films ,TV programmes and more .</h1>
                <h2>Watch anywhere . Cancel at any time.</h2>
                <h3>
                    Ready to watch ? Let's get started.
                </h3>

               

        <div className="input__new">
            <NavLink to='/home' className='loginScreen__getStarted__new'>
        <button className='getStarted__new'>Get Started</button>  
        </NavLink>          
        </div>
                </>
            </div>
        </header>
    )
}

export default EnterScreen

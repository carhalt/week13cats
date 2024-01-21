import React from 'react';
import './login.css'
import kitty4 from '../images/kitty4.png'
import kitty5 from '../images/kitty5.png'
const LoginForm = () => {



    return (
        <div className="container"> 
<div className="header">
<div className="text">Sign In</div>
<div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img className='spinning' src={kitty4} alt="funny kitty" />
                <input type="email" placeholder='Email' />
            </div>
            
            <div className="input">
                <img className='spinning' src={kitty5} alt="funny kitty" />
                <input type="password" placeholder='Password' />
        </div>
        </div>
        <div className="submit-container">
            <div className="submit">Login</div>
        </div>
        </div>
    )
}

export default LoginForm
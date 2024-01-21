import React from 'react'
import './navbar.css'
import k5 from '../images/k5.png'
import k7 from '../images/k7.png'


const Navbar = ()=> {


    return (
        <div className='navbar'>
<img src={k5} alt='funny cat'  className='logo'/>

<ul>
    <li>CatNip</li>
    <li>New Owners</li>
    <li>Purina</li>
    <li>Garfield Comics</li>
</ul>



<img src={k7} alt="funny cat" className='toggle-icon'/>


        </div>
    )
}

export default Navbar
import React from 'react';
import './Navbar.css'
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
    <nav className='navbar'>
    <ul>      
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/experience'>Experience</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/achievements'>Achievements</Link>
      </li> 
    </ul>
  
  
  </nav>
  );
}
export default Navbar;
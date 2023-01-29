import React from 'react';
import '../App.css'


const Navbar = () => {
  return (
    <div>
      <div className="logo">
        <h1 className='logo'>CryptoExtension-Api</h1>
      </div>
      <ul className='navbar'>
        <li className='nav'>Home</li>
        <li className='nav'>About</li>
      </ul>
    </div>
  );
};

export default Navbar;

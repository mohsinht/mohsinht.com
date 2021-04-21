import React from 'react';
import '../../styles/layout.scss';

const Header = () => {
  return (
    <header className={`menu-container`}>
      <div className='logo'>Mohsin</div>
      <ul>
        <li>
          <div className='menu-icon'>
            <i className='fas fa-home'></i>
          </div>
          Home
        </li>
        <li className='active'>
          <div className='menu-icon'>
            <i className='fas fa-file-alt'></i>
          </div>
          Resume
        </li>
        <li>
          <div className='menu-icon'>
            <i className='fas fa-briefcase'></i>
          </div>
          History
        </li>
        <li>
          <div className='menu-icon'>
            <i className='fas fa-newspaper'></i>
          </div>
          Blog
        </li>
        <li>
          <div className='menu-icon'>
            <i className='fas fa-envelope'></i>
          </div>
          Contact
        </li>
      </ul>
    </header>
  );
};

export default Header;

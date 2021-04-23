import React from 'react';
import '../../styles/layout.scss';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import menuItems from './menuItems';

const Header = () => {
  const pathname = globalHistory.location.pathname;

  return (
    <header className={`menu-container`}>
      <div className='logo'>Mohsin</div>
      <ul>
        {menuItems.map((menuItem, key) => {
          return (
            <li key={key}>
              <Link
                to={menuItem.to}
                className={menuItem.to === pathname ? 'active' : ''}
              >
                <div className='menu-icon'>
                  <i className={`fas ${menuItem.icon}`}></i>
                </div>
                {menuItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;

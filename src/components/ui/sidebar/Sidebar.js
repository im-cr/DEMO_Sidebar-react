import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SubMenu from './SubMenu';
import { SidebarData } from './SidebarData';

function Sidebar() {
  const [ navBar, setNavbar] = useState(false);
  const showNav = () => setNavbar(!navBar);
  
  return (
    <aside className={ navBar ? 'aside aside--global is-visible' : 'aside aside--global is-hidden'}>
          
          <div className="aside-trigger" onClick={showNav}>
            <Link to="#"  >
              {navBar ? <FaIcons.FaTimes/>:  <FaIcons.FaBars /> }
            </Link>
          </div>
          <nav className="nav nav--sidebar">
            <ul>
              <li className="nav-item">
                <Link to="/">
                  <FaIcons.FaHome/>
                  <span>Home</span>
                </Link>
              </li>
              {SidebarData.map( (item,index) => {
                return <SubMenu navItem={item} key={index}  />;
              })}
            </ul>
          </nav>
      
    </aside>
  )
}

export default Sidebar;
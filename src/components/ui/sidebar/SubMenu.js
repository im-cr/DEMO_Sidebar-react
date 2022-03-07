import React,  { useState } from 'react';
import { Link } from 'react-router-dom';

function SubMenu({navItem}) {

  const [subNav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subNav);
  
  return (
    <>
      <li className={navItem.cName} key={navItem.name}>
        <Link to={navItem.path} onClick={navItem.subNav && showSubnav} style={{minHeight:'60px'}}>
          {navItem.icon}
          <span>{navItem.name}</span>
        </Link>

         
        {subNav && navItem.subNav ? 
          navItem.iconOpened : 
          navItem.subNav ? navItem.iconClosed : null
        }
        
        {subNav ? 
          <ul className="subNav is-visible">
            {subNav && navItem.subNav.map((subItem, index) => {
              return (
                <li>
                  <Link to='#'>
                    {subItem.icon}
                    <span>{subItem.title}</span>
                  </Link>
                </li>           
              );
            })}
          </ul>
          :
          null
        }
      </li>
    </>
  )
}

export default SubMenu;
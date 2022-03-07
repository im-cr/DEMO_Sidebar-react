import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as AppLogo} from '../../../assets/styles/img/logo-alloy.svg';

const Header = () => {
  return (
    <header className="header header--global">
        <Link to="/">
            <AppLogo />
        </Link>
    </header>
  )
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import login from '../../assets/login.svg';

import {HeaderContainer} from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <div className="position-icons">
                <Link to='/'><img src={home} alt="Ícone" />Home</Link>
                <Link to='/signup'><img src={login} alt="Ícone" />SignUp</Link>
            </div>
        </HeaderContainer>
    );
}

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    
    return (
        <header className={s.header}>
            <img alt='' src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
            <div className={s.loginBlock}>{props.isAuth?<div>
            <NavLink to={'/profile'+props.id}>{props.login}</NavLink>
            <button onClick={props.LogOutMe}>Logout</button>
            </div>
                :<NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;

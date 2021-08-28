import React from "react";
import {header, loginBlock} from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={header}>
            <img src='http://www.logobook.com/wp-content/uploads/2019/02/u_Bear_logo-1.svg'/>
            <div className={loginBlock}>
                {props.isLoggedIn
                    ? <div>{props.login}<button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Log in</NavLink>}

            </div>
        </header>
    )
}

export default Header;
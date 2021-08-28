import React from "react";
import {nav, item, active} from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={nav}>
            <div className={item}>
                <NavLink activeClassName={active} to='/profile'>Profile</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to='/users'>Users</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to='/news'>News</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to='/music'>Music</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to='/settings'>Settings</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to='/friends'>Friends</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
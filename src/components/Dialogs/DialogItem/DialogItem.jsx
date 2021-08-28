import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (

        <NavLink to={path} className={style.item + ' ' + style.active}>
            {props.name}
        </NavLink>
    )
}


export default DialogItem;
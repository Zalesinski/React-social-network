import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            <img className={style.ava} src={props.ava}/>{props.message}
        </div>
    )
}

export default Message;
import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageFormRedux from "./MessageForm/MessageForm";


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name}/>
    );

    let messageElements = props.messages.map(message =>
        <Message message={message.message} ava={message.ava}/>
    );

    let addMessage = (values) => {
        props.addMessage(values.message);
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <MessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;
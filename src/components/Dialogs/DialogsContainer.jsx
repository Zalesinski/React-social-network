import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withLoginRedirect} from "../../HOC/withLoginRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessage,
        dialogs: state.messagesPage.dialogs,
        isLoggedIn: state.auth.isLoggedIn
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withLoginRedirect)(Dialogs);
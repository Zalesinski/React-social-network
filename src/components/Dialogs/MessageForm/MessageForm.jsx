import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import React from "react";

const maxMessage = maxLengthCreator(10);
const MessageForm = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Enter your message"} name={"message"} component={Textarea} validate={[requiredField, maxMessage]}/>
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

const MessageFormRedux = reduxForm({
    form: "message"
})(MessageForm);

export default MessageFormRedux;
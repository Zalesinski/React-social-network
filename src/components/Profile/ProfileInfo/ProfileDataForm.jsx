import React from "react";
import * as PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import handleSubmit from "redux-form/lib/handleSubmit";
import style from "../../common/FormControls/FormControls.module.css";

const maxName = maxLengthCreator(32);
const maxAbout = maxLengthCreator(256);

function ProfileDataForm(props) {
    let {profile, toggleEditMode, handleSubmit, error} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {props.error && <div className={style.formControl + " " + style.error}>{props.error}</div>}
            <div>
                <b>Name:</b><Field placeholder={"Your name"} name={"fullName"} component={Input} validate={[requiredField, maxName]}/>
            </div>

            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
                <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
            </div>
            <b>Details</b><Field placeholder={"Tell what you are looking for"} name={"lookingForAJobDescription"} component={Textarea}/>
            <div><b>About me:</b><Field placeholder={"Write a few words about you"} name={"aboutMe"} component={Textarea} validate={[requiredField, maxAbout]}/></div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return (
                    <div><b>{key}</b><Field placeholder={"Your " + key} name={"contacts." + key} component={Input} validate={[maxName]}/></div>

                )
            })}
            </div>
        </form>

    )
}

const ProfileDataFormRedux = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormRedux;
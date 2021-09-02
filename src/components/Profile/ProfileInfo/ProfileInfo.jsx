import React, {useState} from "react";
import {ava, description} from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormRedux from "./ProfileDataForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }

    const avaSelected = (e) => {
        props.saveAva(e.target.files[0])
    }

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => toggleEditMode());
    }

    return (
        <div>
            <div>
                <img src='https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/Snow-field-1260px.jpg'/>
            </div>
            <div className={description}>
                <div>
                    <b>Id:</b> {props.profile.userId}
                </div>
                <img className={ava} src={props.profile.photos.large || "https://i2.wp.com/apptractor.ru/wp-content/uploads/2017/01/1-vafnorCvAbrebwJCOoXGww.jpeg?fit=740%2C493&ssl=1"}/>
                {props.isOwner && <div><input type="file" onChange={avaSelected}/></div>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {!editMode
                    ? <ProfileData isOwner={props.isOwner} profile={props.profile} toggleEditMode={toggleEditMode}/>
                    : <ProfileDataFormRedux profile={props.profile} initialValues={props.profile} toggleEditMode={toggleEditMode} onSubmit={onSubmit}/>}
            </div>
        </div>

    )
}

const ProfileData = ({profile, isOwner, toggleEditMode}) => {
    return (
    <>
        {isOwner && <div><button onClick={toggleEditMode}>Edit</button></div>}
        <div>
            <b>Name</b> {profile.fullName}
        </div>

        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No" }
        </div>
        {profile.lookingForAJob && <div>{profile.lookingForAJobDescription}</div>}
        <div><b>About me:</b>{profile.aboutMe}</div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return  <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;
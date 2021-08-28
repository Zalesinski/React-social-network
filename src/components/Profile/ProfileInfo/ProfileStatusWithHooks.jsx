import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const toggleEditMode = () => {
        setEditMode(!editMode);
        if (editMode) props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={toggleEditMode}>{props.status || "No status"}</span>
                : <input onChange={onStatusChange} onBlur={toggleEditMode} autoFocus={true}
                         value={status || "No status"}/>}

        </div>
    )
}

export default ProfileStatusWithHooks;
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState(() => ({
            editMode: !this.state.editMode
        }));
        if (!this.state.editMode)this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status != this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <span onDoubleClick={this.toggleEditMode}>{this.state.status || "No status"}</span>
                    : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.toggleEditMode}
                             value={this.state.status || "No status"}/>}

            </div>
        )
    }
}

export default ProfileStatus;
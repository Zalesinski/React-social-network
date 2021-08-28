import React from "react";

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export const withLoginRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLoggedIn) return <Redirect to={"/login"}/>;
            return <Component {...this.props}/>;
        }
    }



    let connectedWithLoginRedirect = connect(mapStateToProps)(RedirectComponent);

    return connectedWithLoginRedirect;
}

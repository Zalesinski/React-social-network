import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUser, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    login: state.auth.login,
    logout: state.auth.logout
})

const mapDispatchToProps = {

    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
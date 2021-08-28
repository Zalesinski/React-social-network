import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import {Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) return <Preloader/>
        return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route path='/dialogs'>
                                <Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </Suspense>

                            </Route>
                            <Route path='/profile/:userId?'>
                                <ProfileContainer/>
                            </Route>
                            <Route path='/users'>
                                <Suspense fallback={<Preloader/>}>
                                    <UsersContainer/>
                                </Suspense>

                            </Route>
                            <Route path='/login'>
                                <Login/>
                            </Route>
                            <Route path='/news'>
                                <News/>
                            </Route>
                            <Route path='/music'>
                                <Music/>
                            </Route>
                            <Route path='/settings'>
                                <Settings/>
                            </Route>
                        </Switch>
                    </div>
                </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

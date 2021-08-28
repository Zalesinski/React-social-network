import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, selectPage, toggleIsInProgress} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    selectIsInProgress,
    selectIsLoading,
    selectPageSize,
    selectSelectedPage,
    selectTotalUsersCount,
    selectUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.selectedPage, this.props.pageSize)
    }

    onPageSelected = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    }


    render() {
        return <>

            <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            selectedPage={this.props.selectedPage}
            follow={this.props.follow}
            onPageSelected={this.onPageSelected}
            toggleIsInProgress={this.props.toggleIsInProgress}
            isInProgress={this.props.isInProgress}
            isLoading={this.props.isLoading}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         selectedPage: state.usersPage.selectedPage,
//         isLoading: state.usersPage.isLoading,
//         isInProgress: state.usersPage.isInProgress
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: selectUsers(state),
        pageSize: selectPageSize(state),
        totalUsersCount: selectTotalUsersCount(state),
        selectedPage: selectSelectedPage(state),
        isLoading: selectIsLoading(state),
        isInProgress: selectIsInProgress(state)
    }
}

let mapDispatchToProps = {
    follow,
    selectPage,
    toggleIsInProgress,
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
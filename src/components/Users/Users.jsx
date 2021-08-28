import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";


let Users = (props) => {
    return <div>
        <Paginator selectedPage={props.selectedPage} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} onPageSelected={props.onPageSelected} portionSize={10}/>
        {  props.isLoading ? <Preloader/> :
            props.users.map(u => <User key={u.id} user={u} isInProgress={props.isInProgress} follow={props.follow}/>)
        }
    </div>
}


export default Users;
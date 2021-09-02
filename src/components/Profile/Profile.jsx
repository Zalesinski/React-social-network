import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (

        <main >
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         isOwner={props.isOwner}
                         updateStatus={props.updateStatus}
                         saveAva={props.saveAva}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </main>
    )
}

export default Profile;
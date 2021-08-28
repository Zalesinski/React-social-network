import React from "react";
import styles from "./User.module.css"
import {NavLink} from "react-router-dom";


let User = ({user, isInProgress, follow}) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img
                                src={user.photos.small != null ? user.photos.small : "https://i2.wp.com/apptractor.ru/wp-content/uploads/2017/01/1-vafnorCvAbrebwJCOoXGww.jpeg?fit=740%2C493&ssl=1"}
                                className={styles.ava}/>
                        </NavLink>
                    </div>
                    <div>
                        <button disabled={isInProgress.some(id => id == user.id)} onClick={() => {
                            follow(user);
                        }}>{user.followed ? "Unfollow" : "Follow"}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div><div>{user.status}</div>
                    </span>
                </span>
    </div>
}


export default User;
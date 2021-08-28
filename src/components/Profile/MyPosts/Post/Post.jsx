import React from "react";
import {item} from './Post.module.css';

const Post = (props) => {
    const {message, likeCount} = props;
    return (
        <div className={item}>
            <img src='https://images.theconversation.com/files/175247/original/file-20170622-26496-7ff7v5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'/>
            {message}
            <div>
                <span>like {likeCount}</span>
            </div>
        </div>
    )
}

export default Post;
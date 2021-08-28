import React from "react";
import Post from "./Post/Post";
import {posts, postsBlock} from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Add new post"} component={Textarea} name={"newPost"} validate={[requiredField, maxLength10]}/></div>
        <div><button>Add post</button></div>
    </form>
}

const PostFormRedux = reduxForm({
    form: "post"
})(PostForm)

function MyPosts(props) {
    console.log("render")
    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount}/>
    );

    let addPost = (values) => {
        props.addPost(values.newPost);
    }

    return (
        <div className={postsBlock}>
            <h1>my posts</h1>
            <PostFormRedux onSubmit={addPost}/>
            <div className={posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
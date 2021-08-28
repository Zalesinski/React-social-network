import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

test('new post should be added, length inc.', () => {
    let action = addPostActionCreator("Some new post");
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 3},
            {id: 2, message: "It's my first post", likesCount: 5},
            {id: 3, message: "Does some one want to hang out?", likesCount: 1}
        ]
    };

    let newState = profileReducer(state, action);

    expect( newState.posts.length).toBe(4);

});
test('new post should have correct message', () => {
    let action = addPostActionCreator("Some new post");
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 3},
            {id: 2, message: "It's my first post", likesCount: 5},
            {id: 3, message: "Does some one want to hang out?", likesCount: 1}
        ]
    };

    let newState = profileReducer(state, action);

    expect( newState.posts[3].message).toBe("Some new post");
});
test('length after delete should dec.', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 3},
            {id: 2, message: "It's my first post", likesCount: 5},
            {id: 3, message: "Does some one want to hang out?", likesCount: 1}
        ]
    };

    let newState = profileReducer(state, action);

    expect( newState.posts.length).toBe(2);
});


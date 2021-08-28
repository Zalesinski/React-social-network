import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 3},
                {id: 2, message: "It's my first post", likesCount: 5},
                {id: 3, message: "Does some one want to hang out?", likesCount: 1}
            ],
            newPost: ""
        },
        messagesPage: {
            messages: [
                {id: 1, message: "Hi", ava: "https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"},
                {
                    id: 2,
                    message: "What's going on?",
                    ava: "https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"
                },
                {
                    id: 3,
                    message: "I want to invite you to a party!",
                    ava: "https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"
                }
            ],
            newMessage: "",
            dialogs: [
                {id: 1, name: "Maryan"},
                {id: 2, name: "Vlad"},
                {id: 3, name: "Svetlana"},
                {id: 4, name: "Vadzim"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Sasha"}
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}



window.store = store;
export default store;
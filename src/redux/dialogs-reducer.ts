const ADD_MESSAGE = 'ADD_MESSAGE';

type MessageType = {
    id: number,
    message: string,
    ava: string
}
type MessagesType = [MessageType];

type DialogsType = [DialogType]
type DialogType = {
    id: number
    message: string
}
type InitialStateType = {
    messages: MessagesType,
    dialogs: DialogsType
}
let initialState = {
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
    dialogs: [
        {id: 1, name: "Maryan"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Svetlana"},
        {id: 4, name: "Vadzim"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Sasha"}
    ]
}

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 4,
                        message: action.newMessage,
                        ava: "https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"
                    }
                ],
                newMessage: ''
            }

            break;
        default:
            return state;
    }
    return state;
}


export default dialogsReducer;

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessage: string
}

export const addMessageActionCreator = (newMessage: string): AddMessageActionType => ({type: ADD_MESSAGE, newMessage});
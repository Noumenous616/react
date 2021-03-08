import avatar from "./img/01.jpg";

const ADD_USER = 'ADD-USER'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
        dialogs: [
            {img: avatar, id: 1, name: "Серега"},
            {img: avatar, id: 2, name: "Миша"},
            {img: avatar, id: 3, name: "Ваня"}

        ],
        messages: [
            {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
            {id: 2, message: "Lorem ipsum dolor sit amet."},
            {id: 3, message: "Lorem ipsum dolor."}

        ],
        newMessageText: "Введите сообщение"

};

const dialogReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                dialogs: [...state.dialogs, {id: 6, img: avatar, name: "UserZero"}]
            }
            /*let newUser = {
                id: 6,
                img: avatar,
                name: "UserZero"
            };
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            stateCopy.dialogs.push(newUser);
            return stateCopy;*/

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageText }],
                newMessageText: ''
            }
            /*let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;*/

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
            /*let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;*/

        default:
            return state;

    }
}

export const onUserChangeActionCreator = () => ({type: ADD_USER});
export const onMessageChangeCreator = () => ({type: ADD_MESSAGE});
export const onMessageUpdateCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});


export default dialogReducer;
import React from 'react';
import {onMessageChangeCreator, onMessageUpdateCreator, onUserChangeActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



/*const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(onUserChangeActionCreator());
        props.store.dispatch(onMessageChangeCreator());

    }

    let onMessageChange = (text) => {
        let action = onMessageUpdateCreator(text);
        props.store.dispatch(action);
    }


    return <Dialogs  addMessage={addMessage} onMessageChange={onMessageChange} messagesPage={state}/>
}*/

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
 return {
     onMessageChange: (text) => {
         let action = onMessageUpdateCreator(text);
         dispatch(action);
     },
     addMessage: () => {
         dispatch(onUserChangeActionCreator());
         dispatch(onMessageChangeCreator());
     }
 }

}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
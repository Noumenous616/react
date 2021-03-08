import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <img src={props.img} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {

    return (
        <div className={s.message}>{props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let state = props.messagesPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/> );
    let newMessageText = state.newMessageText;

    let messageElements = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = messageElements.current.value;
        props.onMessageChange(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={messageElements} value={newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>

            </div>
        </div>

    )
}

export default Dialogs;
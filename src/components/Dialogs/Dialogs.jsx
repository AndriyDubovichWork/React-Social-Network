import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './DialogItem/DialogItem';


const Dialogs = (props) => {

    const messages = props.message
    const dialogs = props.dialogs


    let DialogsElements = dialogs.map((dialog)=> <Dialog key ={dialog.id} name= {dialog.name} id={dialog.id}/>)

    let MessagesElements = messages.map((message)=><Message key={message.id}message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {DialogsElements}
               
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
        </div>
    );
};

export default Dialogs;

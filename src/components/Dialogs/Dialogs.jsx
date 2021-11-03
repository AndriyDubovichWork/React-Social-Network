import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'

const Dialog = (props) =>{
    return(
        <div className={s.dialog}><NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink></div>
    )
}


const Message = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name='Andriy' id = '1'/>
                <Dialog name='Ivanko' id = '2'/>
                <Dialog name='Olexandr' id = '3'/>
                <Dialog name='Roman' id = '4'/>
                <Dialog name='Ura' id = '5'/>

            </div>
            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='I'/>
                <Message message='know'/>
                <Message message='you dumb'/>
            </div>
        </div>
    );
};

export default Dialogs;

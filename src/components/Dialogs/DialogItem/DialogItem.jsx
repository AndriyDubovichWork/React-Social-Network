import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom'

const Dialog = (props) =>{
    return(
        <div className={s.dialog}><img className={s.dialogImg}alt = '' src={props.img}/><NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink></div>
    )
}






export default Dialog;

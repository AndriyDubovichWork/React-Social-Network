import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div>
            <div className={s.friendImg}><img alt='' src={props.img}/></div>
            <div><h4 className={s.name}>{props.name}</h4></div>
        </div>
        

            
        
    );
};

export default Friend;

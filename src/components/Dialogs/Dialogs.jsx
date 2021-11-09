import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './DialogItem/DialogItem';


 
const Dialogs = (props) => {
    
    const messages = props.state.messages
    const dialogs = props.state.dialogs


    let DialogsElements = dialogs.map((dialog)=> <Dialog img={dialog.img}key ={dialog.id} name= {dialog.name} id={dialog.id}/>)

    let MessagesElements = messages.map((message)=><Message key={message.id}message={message.message}/>)

    let MessageText = React.createRef()
    
    
    let MessageOnChange = () =>{
        let text = MessageText.current.value
        
        props.MessageOnChange(text)
        

    }
    let sendMessage=()=>{
         
        props.sendMessage()
        MessageText.current.value=''
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {DialogsElements}
               
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div className={s.messageInp}>
                    <input placeholder='Enter message' ref={MessageText} onChange={MessageOnChange} value={props.state.newMessage}></input>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

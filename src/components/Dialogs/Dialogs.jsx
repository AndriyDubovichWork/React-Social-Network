import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './DialogItem/DialogItem';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form'


const AddMessageForm = (props)=>{
    return(
        <form className={s.messageInp} onSubmit={props.handleSubmit}>
            <Field placeholder='Enter message' component='input' name='message'></Field>
            <button >Send</button>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form:'addMessage'
  })(AddMessageForm)
 
const Dialogs = (props) => {
    
    const messages = props.state.messages
    const dialogs = props.state.dialogs


    let DialogsElements = dialogs.map((dialog)=> <Dialog img={dialog.img}key ={dialog.id} name= {dialog.name} id={dialog.id}/>)

    let MessagesElements = messages.map((message)=><Message key={message.id}message={message.message}/>)


    let sendMessage=(formData)=>{
        props.sendMessage(formData.message)
        formData.message=''
    }
      
    


    if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {DialogsElements}
               
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <AddMessageReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;

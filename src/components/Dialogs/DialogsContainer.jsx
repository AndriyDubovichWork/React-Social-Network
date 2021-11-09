import React from 'react';
import Dialogs from './Dialogs'
import {SendMessageActionCreator,OnMessageChangeActionCreator} from '../../Redux/DialogsReduce'
import StoreContext from './../../StoreContext'

 
const DialogsContainer = (props) => {
    

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state= store.getState()   
                let MessageOnChange = (text) =>{
                    
                    
                    store.dispatch(OnMessageChangeActionCreator(text))
                    
            
                }
                let sendMessage=()=>{
                     
                    store.dispatch(SendMessageActionCreator())
                
                }
            return <Dialogs state={state.dialogsPage}MessageOnChange={MessageOnChange} sendMessage={sendMessage}/>
            }
        }
        </StoreContext.Consumer>  
    );
};

export default DialogsContainer;

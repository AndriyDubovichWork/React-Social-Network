// eslint-disable-next-line
import React from 'react';
import Dialogs from './Dialogs'
import {SendMessageActionCreator,OnMessageChangeActionCreator} from '../../Redux/DialogsReduce'
import {connect} from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect';



const MapStateToProps = (state) =>{
    return {
        state:state.dialogsPage,
        
    }
}
const MapDispatchToProps = (dispatch) =>{
    return {
        MessageOnChange:(text)=>{
            dispatch(OnMessageChangeActionCreator(text))
        },
        sendMessage:()=>{
            dispatch(SendMessageActionCreator())
        }

    }
}
const AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(MapStateToProps,MapDispatchToProps)(AuthRedirectComponent)





export default DialogsContainer;

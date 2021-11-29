// eslint-disable-next-line
import React from 'react';
import Dialogs from './Dialogs'
import {SendMessageActionCreator,OnMessageChangeActionCreator} from '../../Redux/DialogsReduce'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



const MapStateToProps = (state) =>{
    return {
        state:state.dialogsPage,
        
    }
}
const MapDispatchToProps = (dispatch) =>{
    return {

        sendMessage:(text)=>{
            dispatch(SendMessageActionCreator(text))
        }

    }
}





export default compose(connect(MapStateToProps,MapDispatchToProps),withAuthRedirect)(Dialogs)

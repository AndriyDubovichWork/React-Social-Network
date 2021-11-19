// eslint-disable-next-line
import React from 'react';
import { addPostActionCreator, OnPostChangeActionCreator } from '../../../Redux/ProfileReduce';
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


const MapStateToProps = (state) =>{
    
    return {
        posts:state.profilePage.posts,
        newPost:state.profilePage.newPost
    }
}
const MapDispatchToProps = (dispatch) =>{
    return {
    InputPostsOnChange:(text)=>{dispatch(OnPostChangeActionCreator(text))},
    AddPost:()=>{dispatch(addPostActionCreator())}
}}

const MyPostsContainer = connect(MapStateToProps,MapDispatchToProps)(MyPosts)



export default MyPostsContainer;
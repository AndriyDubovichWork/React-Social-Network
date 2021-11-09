import React from 'react';
import { addPostActionCreator, OnPostChangeActionCreator } from '../../../Redux/ProfileReduce';
import MyPosts from './MyPosts'
import StoreContext from './../../../StoreContext'

export const MyPostsContainer = (props) => {
    
    

    return (     
        <StoreContext.Consumer >
            {(store)=>{
                const state = store.getState()
    
    
                let InputPostsOnChange=(text) =>{
                    
                    
                    store.dispatch(OnPostChangeActionCreator(text))
                    
            
                }
                let AddPost=()=>{
                     
                    store.dispatch(addPostActionCreator())
                    
            
                }                
            return <MyPosts InputPostsOnChange={InputPostsOnChange} 
            AddPost={AddPost} 
            posts={state.profilePage.posts} 
            newPost={state.profilePage.newPost}/>}
        }
        </StoreContext.Consumer>    
    );
};


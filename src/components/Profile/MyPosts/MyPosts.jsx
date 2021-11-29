import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addPost } from '../../../Redux/ProfileReduce';
import {Required,MaxLenghtCreator} from '../../../utils/validators/validators'
import { TextArea } from '../../common/FormsControls/FormsControls';



let maxLength100= MaxLenghtCreator(100)

const AddPostForm=(props)=>{
    

    return<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Enter Post'  
            className={s.PostArea} component={TextArea}
             name='NewPostText' validate={[Required,maxLength100]}
            ></Field>
        </div>
        <div>
            <button type="submit">Add Post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({
    form:'addPost'
})(AddPostForm)

const MyPosts = (props) => {
    
    let posts = props.posts
    let PostsItems = posts.map( post=><Post key={post.id}message={post.message} likeCount={post.likeCount}/>) 
    
    
    let AddPost=(formData)=>{
        
        props.addPost(formData.NewPostText)
        formData.NewPostText=''

        

    }
    
    return (

            <div className={s.posts}>
                <h2>My Posts</h2>
                <div>
                    <AddPostReduxForm onSubmit={AddPost}/>
                </div>
                
                {PostsItems}

            </div>
        
    );
};

const MapStateToProps = (state) =>{
    
    return {
        posts:state.profilePage.posts,
        newPost:state.profilePage.newPost
    }
}

  
  


export default connect(MapStateToProps,{addPost})(MyPosts)

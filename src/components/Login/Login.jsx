import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {LoginMe} from '../../Redux/AuthReducer'


const Loginform = (props)=>{
  
  return(
    <form onSubmit={props.handleSubmit}>
      <div><Field component={'input'} name={'login'} type={"text"} placeholder={'Login'} /></div>
      <div><Field component={'input'} name={'password'} type="text" placeholder={'Password'} /></div>
      <div><Field component={'input'} name={'rememberMe'} type="checkbox" />remember me</div>
      <div><button>Login</button></div>
    </form>

  )
}
const LoginReduxForm = reduxForm({
  form:'login'
})(Loginform)
const Login = (props)=>{
  const onSubmit=(formData)=>{
    if (!formData.rememberMe){formData.rememberMe=false}
    props.LoginMe(formData.login,formData.password,formData.rememberMe)
  }
  return(<div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>

  </div>)
}

let mapStateToProps = () => {
  return {};
};


export default connect(mapStateToProps,{LoginMe})(Login)
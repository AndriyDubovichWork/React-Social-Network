import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {LoginMe} from '../../Redux/AuthReducer'
import { Input } from 'components/common/FormsControls/FormsControls'
import { MaxLenghtCreator, Required } from 'utils/validators/validators'
import { Redirect } from 'react-router'
import style from './Login.module.css'

const maxLength100 = MaxLenghtCreator(100) 
const Loginform = (props)=>{
  
  return(
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Input} name={'login'} type={"text"} placeholder={'Login'} validate={[Required,maxLength100]}/></div>
      <div><Field component={Input} name={'password'}  type={'password'} placeholder={'Password'} validate={[Required,maxLength100]}/></div>
      <div><Field component={Input} name={'rememberMe'} type="checkbox" />remember me</div>
      {props.error&&<div className={style.CommonError}>{props.error}</div>}
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
  if(props.isAuth){
    return <Redirect to = '/profile'/> 
  }
  
  return(<div className={style.login}>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    
  </div>)
}

const MapStateToProps = (state)=>({
  isAuth:state.auth.isAuth
})


export default connect(MapStateToProps,{LoginMe})(Login)
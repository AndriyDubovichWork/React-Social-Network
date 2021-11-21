import React from 'react'
import { Field, reduxForm } from 'redux-form'
const Loginform = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div><Field component={'input'} name={'login'} type={"text"} placeholder={'Login'} /></div>
      <div><Field component={'input'} name={'password'} type="text" placeholder={'Passwodr'} /></div>
      <div><Field component={'input'} name={'rememberMe'} type="checkbox" />remember me</div>
      <div><button>Login</button></div>
    </form>

  )
}
const LoginReduxForm = reduxForm({
  form:'login'
})(Loginform)
const Login = ()=>{
  return(<div>
    <h1>Login</h1>
    <LoginReduxForm/>

  </div>)
}


export default Login
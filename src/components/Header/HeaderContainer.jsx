import React from 'react';
import Header from './Header'
import {connect} from 'react-redux'
import {AuthMe,LogOutMe} from '../../Redux/AuthReducer'


class HeaderContainer extends React.Component{
    componentDidMount(){
        
        this.props.AuthMe()     
    }
    render(){
        return (<Header {...this.props}/>)
    };
};

const MapStateToProps = (state) => {
    
    return{

    
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    
}}

export default connect(MapStateToProps,{AuthMe,LogOutMe})(HeaderContainer);

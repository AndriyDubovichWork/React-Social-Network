// eslint-disable-next-line
import React from 'react';
import Navigation from './Navigation'
import {connect} from 'react-redux'


const MapStateToProps = (state) =>{
    return {
        friends:state.sidebar.friends
    }
}
const MapDispatchToProps = () =>{return {}}

const NavigationContainer = connect(MapStateToProps,MapDispatchToProps)(Navigation)



export default NavigationContainer;

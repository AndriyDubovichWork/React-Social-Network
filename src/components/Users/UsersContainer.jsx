// eslint-disable-next-line
import React from 'react';
import UsersAPICompon from './UsersAPICompon.js'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { Follow,Unfollow, SetUsers ,setCurrentPage,ToggleFollowingProgress,getUsersThunkCreator} from '../../Redux/UsersReduce';
import { compose } from 'redux';

const MapStateToProps=(state)=>{
    
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        TotalUserCount:state.usersPage.TotalUserCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        isFollowingProgress:state.usersPage.isFollowingProgress
        
    }
}



export default compose(
    withAuthRedirect,

    connect(MapStateToProps,{
        Follow,
        Unfollow,
        SetUsers,
        setCurrentPage,
        
        ToggleFollowingProgress,
        getUsers:getUsersThunkCreator,
    })
)(UsersAPICompon)
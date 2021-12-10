// eslint-disable-next-line
import React from 'react';
import UsersAPICompon from './UsersAPICompon.js'
import {connect} from 'react-redux'
import { Follow,Unfollow, SetUsers ,setCurrentPage,ToggleFollowingProgress,getUsersThunkCreator} from '../../Redux/UsersReduce';
import { compose } from 'redux';
import { GetcurrentPage, GetisFetching, GetisFollowingProgress, GetPageSize, GetTotalUserCount, GetUsers } from 'Redux/UsersSelectors.js';

// const MapStateToProps=(state)=>{
    
//     return {
//         users:state.usersPage.users,
//         pageSize:state.usersPage.pageSize,
//         TotalUserCount:state.usersPage.TotalUserCount,
//         currentPage:state.usersPage.currentPage,
//         isFetching:state.usersPage.isFetching,
//         isFollowingProgress:state.usersPage.isFollowingProgress
        
//     }
// }
const MapStateToProps=(state)=>{
    
    return {
        users:GetUsers(state),
        pageSize:GetPageSize(state),
        TotalUserCount:GetTotalUserCount(state),
        currentPage:GetcurrentPage(state),
        isFetching:GetisFetching(state),
        isFollowingProgress:GetisFollowingProgress(state)
        
    }
}




export default compose(
    

    connect(MapStateToProps,{
        Follow,
        Unfollow,
        SetUsers,
        setCurrentPage,
        
        ToggleFollowingProgress,
        getUsers:getUsersThunkCreator,
    })
)(UsersAPICompon)

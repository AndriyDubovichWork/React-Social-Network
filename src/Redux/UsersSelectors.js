import { createSelector } from "reselect"

export const GetUsers =(state)=>{
    return state.usersPage.users
}

// const getUserSuper = createSelector(()=>({
//     state.usersPage.users
// }))

export const GetPageSize =(state)=>{
    return state.usersPage.pageSize
}
export const GetTotalUserCount =(state)=>{
    return state.usersPage.TotalUserCount
}
export const GetcurrentPage =(state)=>{
    return state.usersPage.currentPage
}
export const GetisFetching =(state)=>{
    return state.usersPage.isFetching
}
export const GetisFollowingProgress =(state)=>{
    return state.usersPage.isFollowingProgress
}
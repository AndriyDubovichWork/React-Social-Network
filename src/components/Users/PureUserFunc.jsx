// eslint-disable-next-line
import React from 'react';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom'
import {Follow,unFollow} from '../../api/api'
let PureUserFunc=(props)=>{

        let pageCount = Math.ceil(props.TotalUserCount / props.pageSize)
        if (pageCount>=20){
            pageCount=20
        }
        let pages=[]

        for(let i=1;i<=pageCount;i++ ){
            pages.push(i)
        }
        
        return ( 
            
            <div className={s.users}>
                <div className={s.pageNavigation}>{
                    pages.map(p=>{
                        
                        return <span className={props.currentPage===p ?s.activePage:s.pageNavigationNumber}
                        onClick={()=>{
                            props.onPageChange(p)
                        }}>{p}</span>
                })}</div>
                {
                    props.users.map(u=><div key={props.id} >
                        <span>
                            <div>
                                <NavLink to={'/profile/'+u.id}>
                                    <img alt = ''src={u.photos.small!==null ? u.photos.small : props.img}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed 
                                ?<button disabled={props.isFollowingProgress.some(id=>id==u.id)} onClick={()=>{
                                    props.Unfollow(u.id)
                                
                                    
                                }}>unfollow</button>
                                :<button disabled={props.isFollowingProgress.some(id=>id===u.id)} onClick={()=>{
                                    props.Follow(u.id)
                                
                                    
                                
                                }}>follow</button>
                                }
                                
                            </div>
                        </span>
    
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                {/* <div>{u.location.country}</div>
                                <div>{u.location.city}</div> */}
                                
                            </span>
                        </span>
                    </div>)
                }
            </div>
        );        
}




export default PureUserFunc;

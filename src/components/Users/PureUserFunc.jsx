// eslint-disable-next-line
import React from 'react';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let PureUserFunc = (props) => {
  return (
    <div className={s.users}>
      <Paginator
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
        totalItemsCount={props.TotalUserCount}
        pageSize={props.pageSize}
      />
      {props.users.map((u) => (
        <User
          user={u}
          isFollowingProgress={props.isFollowingProgress}
          Follow={props.Follow}
          Unfollow={props.Unfollow}
          img={props.img}
          id={u.id}
          photoSmall={u.photos.small}
        />

        // <div key={props.id}>
        //   <span>
        //     <div>
        //       <NavLink to={'/profile/' + u.id}>
        //         <img
        //           alt=''
        //           src={u.photos.small !== null ? u.photos.small : props.img}
        //         />
        //       </NavLink>
        //     </div>
        //     <div>
        //       {u.followed ? (
        //         <button
        //           disabled={props.isFollowingProgress.some((id) => id == u.id)}
        //           onClick={() => {
        //             props.Unfollow(u.id);
        //           }}
        //         >
        //           unfollow
        //         </button>
        //       ) : (
        //         <button
        //           disabled={props.isFollowingProgress.some((id) => id === u.id)}
        //           onClick={() => {
        //             props.Follow(u.id);
        //           }}
        //         >
        //           follow
        //         </button>
        //       )}
        //     </div>
        //   </span>

        //   <span>
        //     <span>
        //       <div>{u.name}</div>
        //       <div>{u.status}</div>
        //     </span>
        //     <span>
        //       {/* <div>{u.location.country}</div>
        //                         <div>{u.location.city}</div> */}
        //     </span>
        //   </span>
        // </div>
      ))}
    </div>
  );
};

export default PureUserFunc;

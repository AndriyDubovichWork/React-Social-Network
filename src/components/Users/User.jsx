// eslint-disable-next-line
import React from 'react';
import { NavLink } from 'react-router-dom';

let User = (props) => {
  let u = props.user;
  return (
    <div key={props.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + props.id}>
            <img
              alt=''
              src={u.photos.small !== null ? u.photos.small : props.img}
            />
          </NavLink>
        </div>
        <div>
          {u.followed ? (
            <button
              disabled={props.isFollowingProgress.some((id) => id == u.id)}
              onClick={() => {
                props.Unfollow(u.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={props.isFollowingProgress.some((id) => id === u.id)}
              onClick={() => {
                props.Follow(u.id);
              }}
            >
              follow
            </button>
          )}
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
    </div>
  );
};

export default User;

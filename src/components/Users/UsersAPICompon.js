// eslint-disable-next-line
import React from 'react';

import PureUserFunc from './PureUserFunc';
import Preloader from '../common/preloader/preloader';

class UsersAPICompon extends React.Component {
    imgurl =
        'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png';

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.ToggleIsFetching(true);
        // getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.ToggleIsFetching(false);
        //     this.props.SetUsers(data.items);
        //     this.props.setUsersCount(data.totalCount);
        // });
    }
    onPageChange = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}

                <PureUserFunc
                    Unfollow={this.props.Unfollow}
                    Follow={this.props.Follow}
                    TotalUserCount={this.props.TotalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    img={this.imgurl}
                    isFollowingProgress={this.props.isFollowingProgress}
                />
            </>
        );
    }
}

export default UsersAPICompon;

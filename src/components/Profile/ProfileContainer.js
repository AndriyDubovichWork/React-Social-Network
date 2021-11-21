import React from 'react';
import Profile from './Profile';
import {
    GetProfileData,
    GetStatus,
    UpdateStatus,
} from '../../Redux/ProfileReduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.GetProfileData(userId);
        this.props.GetStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                UpdateStatus={this.props.UpdateStatus}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, { GetProfileData, GetStatus, UpdateStatus })
)(ProfileContainer);

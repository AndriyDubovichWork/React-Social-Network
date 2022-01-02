import React from 'react';
import Profile from './Profile';
import {
  GetProfileData,
  GetStatus,
  UpdateStatus,
  UpdateMainPhoto,
} from '../../Redux/ProfileReduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshUser() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.GetProfileData(userId);
    this.props.GetStatus(userId);
  }
  componentDidMount() {
    this.refreshUser();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId)
      this.refreshUser();
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOvner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        UpdateStatus={this.props.UpdateStatus}
        UpdateMainPhoto={this.props.UpdateMainPhoto}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    IsAuth: state.auth.isAuth,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    GetProfileData,
    GetStatus,
    UpdateStatus,
    UpdateMainPhoto,
  })
)(ProfileContainer);

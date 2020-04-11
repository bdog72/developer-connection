//
//
import React, { Component } from 'react';
import { auth } from '../store/actions/user_actions';

import { connect } from 'react-redux';

export default function (ComposedClass) {
  class AuthenticationCheck extends Component {
    //
    state = {
      loading: true,
    };

    componentDidMount() {
      this.props.dispatch(auth()).then((response) => {
        let user = this.props.user.auth;

        this.setState({ loading: false });

        if (!user) {
          this.props.history.push('/login');
        } else {
          this.props.history.push('/admin');
        }
      });
    }

    render() {
      if (this.state.loading) {
        return <div className="loading">Loading...</div>;
      } else {
        return <ComposedClass {...this.props} user={this.props.user} />;
      }
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}
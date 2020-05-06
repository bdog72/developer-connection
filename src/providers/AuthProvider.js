//
//
import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from 'actions';
import jwt from 'jsonwebtoken';

import moment from 'moment';

const { createContext, useContext } = React;
const AuthContext = createContext(null);

export const AuthBaseProvider = (props) => {
  //
  const checkAuthState = () => {
    const token = getToken();

    // if (token && ) {

    // }
  };

  const getExpiration = (token) => {
    const exp = decodeToken(token).exp;
  };

  const getToken = () => {
    return localStorage.getItem('bwm_token');
  };

  const decodeToken = (token) => {
    return jwt.decode(token);
  };

  const signIn = (loginData) => {
    return loginUser(loginData).then((token) => {
      localStorage.setItem('bwm_token', token);
      const decodedToken = decodeToken(token);
      return token;
    });
  };

  const authApi = {
    signIn,
    checkAuthState,
  };

  return (
    <AuthContext.Provider value={authApi}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const withAuth = (Component) => {
  return function (props) {
    return (
      <AuthContext.Consumer>
        {(authApi) => <Component {...props} auth={authApi} />}
      </AuthContext.Consumer>
    );
  };
};

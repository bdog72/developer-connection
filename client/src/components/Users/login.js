//
//
import React, { Component } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

class Login extends Component {
  state = {
    success: false,
    validation: false,
  };

  render() {
    return (
      <div className="container form_container">
        <h1>Welcome Back</h1>
        <hr />
        <h4>Sign In Here:</h4>
      </div>
    );
  }
}

export default Login;

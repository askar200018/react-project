import React from 'react';
import _ from 'lodash/fp';

import { AuthNav, Login } from 'features/auth';

import styles from './Login.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.authwrapper}>
      <AuthNav linkText="Sign up" linkUrl="/signup" />
      <Login />
    </div>
  );
};

export default LoginPage;

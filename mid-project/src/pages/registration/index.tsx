import React from 'react';
import _ from 'lodash/fp';

import { AuthNav, Register } from 'features/auth';
import styles from './Registration.module.scss';

interface Props {}

const RegistrationPage = (props: Props) => {
  return (
    <div className={styles.authwrapper}>
      <AuthNav linkUrl="/signin" linkText="Sign in" />
      <Register />
    </div>
  );
};

export default RegistrationPage;

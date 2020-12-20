import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import _ from 'lodash/fp';

import { AuthNav, Register } from 'features/auth';
import styles from './Registration.module.scss';
import { userCreate } from '../../api/user';
import { Profession } from '../../models/profession.enum';

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

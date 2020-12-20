import React, { useContext, useEffect, useRef, useState } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';

import { login } from 'features/auth/models/isLoggedInSlice';
import { AuthNav, Login } from 'features/auth';

import { Link, useHistory } from 'react-router-dom';
import { userList } from '../../api/user';
import { User } from '../../models/user.model';
import { IsLoggedInContext } from '../../contexts/IsLoggedIn';
import { useActiveUser } from '../../contexts/ActiveUserContext';
import styles from './Login.module.scss';

const mapDispatch = { login };

interface Props {
  login: () => Action;
}
interface IForm {
  email: string;
  password: string;
}
export const useIsLogged = () => React.useContext(IsLoggedInContext);

const LoginPage = ({ login }: Props) => {
  const [errorUser, setErrorUser] = useState('');
  const { activeUser, setActiveUser } = useActiveUser()!;
  const inputEl = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useIsLogged()!;

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const onSubmit = (data: IForm) => {
    const users = userList();
    const activeUser = users.find((user: User) => {
      return data.email === user.email && data.password === user.password;
    });
    if (!!activeUser) {
      localStorage.setItem('loggedIn', JSON.stringify(true));
      localStorage.setItem('activeUser', JSON.stringify(activeUser));
      setActiveUser(activeUser);
      setIsLoggedIn(true);
      login();
      history.push('/');
    } else {
      setErrorUser('Email or password are incorrect!');
    }
  };

  return (
    <div className={styles.authwrapper}>
      <AuthNav linkText="Sign up" linkUrl="/signup" />
      <Login />
    </div>
  );
};

export default connect(null, mapDispatch)(LoginPage);

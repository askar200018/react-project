import React, { useContext, useEffect, useRef, useState } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';

import { login } from '../models/isLoggedInSlice';

import { useHistory } from 'react-router-dom';
import { userList } from 'api/user';
import { IsLoggedInContext } from 'contexts/IsLoggedIn';
import { useActiveUser } from 'contexts/ActiveUserContext';

import styles from './styles.module.scss';
import { User } from '../types';

const mapDispatch = { login };

interface Props {
  login: () => Action;
}
interface IForm {
  email: string;
  password: string;
}
export const useIsLogged = () => React.useContext(IsLoggedInContext);

const Login = ({ login }: Props) => {
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
      console.log('work normal');
      login();
      localStorage.setItem('loggedIn', JSON.stringify(true));
      localStorage.setItem('activeUser', JSON.stringify(activeUser));
      setActiveUser(activeUser);
      setIsLoggedIn(true);
      history.push('/');
    } else {
      setErrorUser('Email or password are incorrect!');
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div className={styles.formfield}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        {_.get('email.type', errors) === 'required' && (
          <p className={styles.error}>Email is required</p>
        )}
        {_.get('email.type', errors) === 'pattern' && (
          <p className={styles.error}>Email should include @</p>
        )}
      </div>
      <div className={styles.formfield}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
            minLength: 5,
          })}
        />
        {_.get('password.type', errors) === 'required' && (
          <p className={styles.error}>Password is required</p>
        )}
        {_.get('password.type', errors) === 'minLength' && (
          <p className={styles.error}>
            Password should be greater than 5 characters
          </p>
        )}
      </div>
      <div className={styles.formfield}>
        <p className={styles.error}>{errorUser}</p>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default connect(null, mapDispatch)(Login);

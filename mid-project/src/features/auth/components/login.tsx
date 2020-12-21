import React, { useContext, useEffect, useRef, useState } from 'react';
import { Action } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';

import { login } from '../models/isLoggedInSlice';
import { loginUser } from '../models/activeUserSlice';

import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';
import { User } from '../types';
import { RootState } from 'reducers';

interface Props {}
interface IForm {
  email: string;
  password: string;
}

export const Login = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const [errorUser, setErrorUser] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const onSubmit = (data: IForm) => {
    const activeUser = users.find((user: User) => {
      return data.email === user.email && data.password === user.password;
    });
    if (activeUser) {
      dispatch(login());
      // localStorage.setItem('loggedIn', JSON.stringify(true));
      // localStorage.setItem('activeUser', JSON.stringify(activeUser));
      dispatch(loginUser(activeUser));
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

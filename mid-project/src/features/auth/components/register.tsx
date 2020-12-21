import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import _ from 'lodash/fp';

import { userCreate } from 'api/user';
import styles from './styles.module.scss';
import { Profession, User } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { addUser } from '../models/usersSlice';

interface Props {}

export interface IForm {
  name: string;
  email: string;
  password: string;
  profession: Profession;
}
const professons: Profession[] = [
  Profession.Designer,
  Profession.Developer,
  Profession.User,
];

const isUserExist = (users: User[], newUser: User): boolean => {
  const user = users.find(
    (user) =>
      user.email === newUser.email && user.password === newUser.password,
  );
  if (user) {
    return true;
  }
  return false;
};

export const Register = (props: Props) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const inputEl = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, errors } = useForm();
  const [errorUser, setErrorUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const onSubmit = (data: IForm) => {
    const newUser: User = { ...data, houses: [], id: -1 };
    console.log(data);
    if (!isUserExist(users, newUser)) {
      dispatch(addUser(newUser));
      history.push('/signin');
    } else {
      setErrorUser('User with this email already registered!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <div className={styles.formfield}>
        <label>First Name</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: true,
            maxLength: 20,
          })}
        />
        {_.get('name.type', errors) === 'required' && (
          <p className={styles.error}>Name is required</p>
        )}
        {_.get('name.type', errors) === 'maxLength' && (
          <p className={styles.error}>Name cannot exceed 20 characters</p>
        )}
      </div>
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
        <label>Profession</label>
        <select name="profession" ref={register({})}>
          {professons.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
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
      <button type="submit">Register</button>
    </form>
  );
};

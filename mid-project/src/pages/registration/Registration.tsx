import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';
import styles from './Registration.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { userCreate } from '../../api/user';
import { InputType } from 'zlib';

interface Props {}

export enum Profession {
  Designer,
  Developer,
  User,
}

export interface IForm {
  name: string;
  email: string;
  password: string;
  profession: Profession;
}

const professons: string[] = ['Designer', 'Developer', 'User'];

export const Registration = (props: Props) => {
  const inputEl = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const onSubmit = (data: IForm) => {
    console.log(data);
    if (userCreate(data)) {
      history.push('/signin');
    }
  };
  return (
    <div className={styles.authwrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">LOGO</Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link className={styles.auth} to="/signin">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
            <p className={styles.error}>Password should be greater than 5 characters</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// function Select({ register, options, name, ...rest }) {
//   return (
//     <select name={name} ref={register} {...rest}>
//       {options.map((value) => (
//         <option key={value} value={value}>
//           {value}
//         </option>
//       ))}
//     </select>
//   );
// }

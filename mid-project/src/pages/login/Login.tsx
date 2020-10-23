import React, { useContext, useEffect, useRef } from 'react';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';
import { Link, useHistory } from 'react-router-dom';
import { userList } from '../../api/user';
import { User } from '../../models/user.model';
import { IsLoggedInContext } from '../../contexts/IsLoggedIn';

interface Props {}
interface IForm {
  email: string;
  password: string;
}
export const useIsLogged = () => React.useContext(IsLoggedInContext);

export const Login = (props: Props) => {
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
    const users = JSON.parse(userList());
    const activeUser = users.find((user: User) => {
      return data.email === user.email && data.password === user.password;
    });
    if (!!activeUser) {
      localStorage.setItem('token', JSON.stringify(true));
      localStorage.setItem('loggedIn', JSON.stringify(true));
      localStorage.setItem('activeUser', JSON.stringify(activeUser));
      setIsLoggedIn(true);
      history.push('/');
    } else {
      alert('incorrect');
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
              <Link className={styles.auth} to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
            <p className={styles.error}>Password should be greater than 5 characters</p>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

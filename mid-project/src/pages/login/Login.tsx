import React from 'react'
import './Login.scss';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';

interface Props {
    
}
enum Profession {
  Designer,
  Developer,
  User,
}

interface IForm {
  email: string;
  password: string;
}

interface User {
  email: string;
  password: string;
  name: string;
  profession: Profession;
}

const users: User[] = [
 {
  email:"nurai@gmail.com", 
  password:"12345", 
  name:"Nurai", 
  profession:Profession.User
 }
]

export const Login = (props: Props) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: IForm) => {
      const result = users.find((user) => {
        return data.email === user.email && data.password === user.password;
      });
      if(!!result ){console.log(true)}
      };
      
    return (
        <div className="auth-wrapper">
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
          <label>Email</label>
          <input
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {_.get('email.type', errors) === 'required' && <p>Email is required</p>}
          {_.get('email.type', errors) === 'pattern' && <p>Email should include @</p>}
        </div>
        <div className="form-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            ref={register({
              required: true,
              minLength: 5,
            })}
          />
          {_.get('password.type', errors) === 'required' && <p>Password is required</p>}
          {_.get('password.type', errors) === 'minLength' && (
            <p>Password should be greater than 5 characters</p>
          )}
        </div>
        <input type="submit" className="auth"/>
      </form>
    </div>
    );
}
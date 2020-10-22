import React from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';
import './Registration.scss';

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  return (
    <div className="auth-wrapper">
      <form className="registration" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>First Name</label>
          <input
            name="name"
            ref={register({
              required: true,
              maxLength: 20,
            })}
          />
          {_.get('name.type', errors) === 'required' && <p>Name is required</p>}
          {_.get('name.type', errors) === 'maxLength' && <p>Name cannot exceed 20 characters</p>}
        </div>
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
          <label>Profession</label>
          <select name="profession" ref={register({})}>
            {professons.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
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
        <input type="submit" />
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

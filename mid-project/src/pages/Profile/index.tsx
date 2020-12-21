import React, { useReducer, useState } from 'react';
import _ from 'lodash/fp';
import { useForm } from 'react-hook-form';
import './Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { User } from 'features/auth/types';
import { editUser } from 'features/auth/models/usersSlice';
import { loginUser } from 'features/auth/models/activeUserSlice';

interface Props {}
interface IForm {
  name: string;
  email: string;
  password: string;
}

interface IsEditState {
  isEdit: boolean;
}

export enum Actions {
  SET_IS_EDIT,
}

export interface Action {
  type: Actions;
  payload: { isEdit: boolean };
}

const initialState: IsEditState = { isEdit: false };

function reducer(state: IsEditState, action: Action) {
  switch (action.type) {
    case Actions.SET_IS_EDIT:
      return { isEdit: action.payload.isEdit };
    default:
      throw new Error();
  }
}

const ProfilePage = (props: Props) => {
  const activeUser = useSelector((state: RootState) => state.activeUser);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const [state, isEditDispatch] = useReducer(reducer, initialState);
  const onSubmit = (data: IForm) => {
    const newUser: User = { ...activeUser, ...data };
    dispatch(editUser(newUser));
    dispatch(loginUser(newUser));
    isEditDispatch({ type: Actions.SET_IS_EDIT, payload: { isEdit: false } });
  };
  return (
    <div className="wrapper-profile">
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <h2>Profile Data</h2>
          <div className="input-fields">
            <div className="input-field">
              <input
                type="text"
                name="name"
                ref={register({
                  required: true,
                })}
                disabled={!state.isEdit}
                className="input"
                defaultValue={activeUser.name}
              />
              {_.get('name.type', errors) === 'required' && (
                <p className="error">Name is required</p>
              )}
            </div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                disabled={!state.isEdit}
                defaultValue={activeUser.email}
                className="input"
              />
              {_.get('email.type', errors) === 'required' && (
                <p className="error">Email is required</p>
              )}
              {_.get('email.type', errors) === 'pattern' && (
                <p className="error">Email should include @</p>
              )}
            </div>
          </div>
          {!state.isEdit && (
            <button
              className="btn-profile-edit"
              onClick={() =>
                isEditDispatch({
                  type: Actions.SET_IS_EDIT,
                  payload: { isEdit: true },
                })
              }
            >
              Edit
            </button>
          )}
          {state.isEdit && (
            <button className="btn-profile" type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;

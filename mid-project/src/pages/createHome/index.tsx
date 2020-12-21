import React, { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';
import styles from './CreateHome.module.scss';
import { useHistory } from 'react-router';
import { House } from 'features/rooms/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { addActiveUserHouse } from 'features/auth/models/activeUserSlice';

interface Props {}

interface IForm {
  name: string;
  description: string;
}

const CreateHomePage = (props: Props) => {
  const activeUser = useSelector((state: RootState) => state.activeUser);
  const dispatch = useDispatch();
  const inputEl = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const onSubmit = (data: IForm) => {
    console.log(data);
    const newHouse: House = { ...data, rooms: [], id: 0 };
    dispatch(addActiveUserHouse(newHouse));
    console.log('activeUser', activeUser);
    const houseId = activeUser.houses.length + 1;
    history.push(`/rooms/${houseId}/Bathroom`);
  };
  return (
    <>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create home</h1>
        <div className={styles.formfield}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            ref={register({
              required: true,
            })}
          />
          {_.get('name.type', errors) === 'required' && (
            <p className={styles.error}>Name is required</p>
          )}
        </div>
        <div className={styles.formfield}>
          <label>Description</label>
          <textarea
            name="description"
            ref={register({
              required: true,
            })}
          />
          {_.get('description.type', errors) === 'required' && (
            <p className={styles.error}>Description is required</p>
          )}
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreateHomePage;

import React, { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';
import styles from './CreateHome.module.scss';
import { House } from '../../models/house.interface';
import { useActiveUser } from '../../contexts/ActiveUserContext';
import { useHistory } from 'react-router';

interface Props {}

interface IForm {
  name: string;
  description: string;
}

const CreateHome = (props: Props) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const { activeUser, setActiveUser } = useActiveUser()!;
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const onSubmit = (data: IForm) => {
    console.log(data);
    const houseId = activeUser.houses.length;
    const newHouse = { ...data, rooms: [], id: houseId };
    activeUser.houses.push(newHouse);
    history.push(`/rooms/${houseId}/Bathroom`);
    localStorage.setItem('activeHouse', JSON.stringify(activeUser.houses.length));
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

export default CreateHome;

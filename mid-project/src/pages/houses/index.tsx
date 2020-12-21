import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './houses.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

interface Props {}

const Houses = (props: Props) => {
  const { houses } = useSelector((state: RootState) => state.activeUser);
  const imgUrl = './images/logo.jpg';
  return (
    <div className={styles.rooms}>
      <h1 className={styles.title}>My Houses</h1>
      <div className={styles.wrap}>
        {houses.map((house, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.card_pic_wrap}>
                <Link to="/">
                  <img
                    src={require('./images/house.jpg')}
                    alt="A leafy plant"
                  />
                </Link>
              </div>
              <div className={styles.card_content}>
                <h3 className={styles.card_name}>{house.name}</h3>
              </div>
            </div>
          );
        })}
        <div className={styles.card}>
          <div className={styles.card_pic_wrap}>
            <Link to="/create">
              <img src={require('./images/house.jpg')} alt="A leafy plant" />
            </Link>
          </div>
          <div className={styles.card_content}>
            <h3 className={styles.card_name}>Create home</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;

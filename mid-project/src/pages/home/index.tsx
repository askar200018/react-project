import React, { useContext } from 'react';
import { Counter } from '../../features/counter';
import logo from './images/logo.svg';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div className={styles.wrapper_title}>
          <h1 className={styles.title}>DREAM HOUSE</h1>
          <div>
            <Link to="/create" className={styles.btn}>
              Create Home
            </Link>
          </div>
        </div>
      </div>
      {/* <section className="hero">
        <img src={logo} className="hero__logo" alt="logo" />
        <Counter className="hero__counter" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello Dream Team(Nurishok, Aigerim,
          Askar)
        </p>
        <a
          className="hero__link"
          href="https://effector.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Effector
        </a>
      </section> */}
    </main>
  );
};

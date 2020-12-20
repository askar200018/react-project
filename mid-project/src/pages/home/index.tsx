import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import Main from '../main';

const HomePage: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div className={styles.wrapper_title}>
          <h1 className={styles.title}>DREAM HOUSE</h1>
          {/* <div>
            <Link to="/create" className={styles.btn}>
              Create Home
            </Link>
          </div> */}
        </div>
      </div>
      <Main />
    </main>
  );
};

export default HomePage;

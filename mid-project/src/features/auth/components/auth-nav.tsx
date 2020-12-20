import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  linkUrl: string;
  linkText: string;
}

export const AuthNav = ({ linkUrl, linkText }: Props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">LOGO</Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link className={styles.auth} to={linkUrl}>
              {linkText}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

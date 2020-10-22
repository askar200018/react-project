import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IsLoggedInContext } from '../../contexts/IsLoggedIn';
import styles from './Navbar.module.css';

interface Props {}

export const useIsLogged = () => React.useContext(IsLoggedInContext);

export const Navbar = (props: Props) => {
  const { isLoggedIn, setIsLoggedIn } = useIsLogged()!;
  const [background, setBackground] = useState('top');
  const scrollEvent = () => {
    const backgroundcolor = window.scrollY < 140 ? 'inherit' : '#2D6A4F';

    setBackground(backgroundcolor);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    return function cleanup() {
      document.removeEventListener('scroll', scrollEvent);
    };
  });
  const navStyle = {
    background: background,
  };
  return (
    <div className={styles.nav} style={navStyle}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.menu}>
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {!isLoggedIn && (
              <Link className={styles.auth} to="/signin">
                Sign in
              </Link>
            )}
          </li>
          <li>
            {!isLoggedIn && (
              <Link className={styles.auth} to="/signup">
                Sign up
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

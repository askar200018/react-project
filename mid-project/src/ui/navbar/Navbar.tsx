import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IsLoggedInContext } from '../../contexts/IsLoggedIn';
import styles from './Navbar.module.css';

interface Props {}

export const useIsLogged = () => React.useContext(IsLoggedInContext);

export const Navbar = (props: Props) => {
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useIsLogged()!;
  const initialColor = location.pathname === '/' ? 'inherit' : '#2D6A4F';
  console.log(initialColor);
  const [background, setBackground] = useState(initialColor);
  const scrollEvent = () => {
    const backgroundcolor =
      window.scrollY < 140 && location.pathname === '/' ? 'inherit' : '#2D6A4F';

    setBackground(backgroundcolor);
  };

  useEffect(() => {
    const initialColor = location.pathname === '/' ? 'inherit' : '#2D6A4F';
    setBackground(initialColor);
  }, [location, setBackground]);

  useEffect(() => {
    if (location.pathname === '/') {
      document.addEventListener('scroll', scrollEvent);
    }
    return function cleanup() {
      document.removeEventListener('scroll', scrollEvent);
    };
  });
  const logout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };
  const navStyle = {
    background: background,
  };
  return (
    <div className={styles.nav} style={navStyle}>
      <div className={styles.logo}>
        <Link to="/">LOGO</Link>
      </div>
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
          <li>
            {isLoggedIn && (
              <Link className={styles.auth} to="/profile">
                Profile
              </Link>
            )}
          </li>
          <li>
            {isLoggedIn && (
              <Link className={styles.auth} to="/" onClick={logout}>
                Log out
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

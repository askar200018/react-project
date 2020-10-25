import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IsLoggedInContext } from '../../contexts/IsLoggedIn';
import styles from './Navbar.module.css';

interface Props {}

export const useIsLogged = () => React.useContext(IsLoggedInContext);

interface LinkInterface {
  path: string;
  name: string;
}

const links: LinkInterface[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/profile',
    name: 'Profile',
  },
  {
    path: '/contacts',
    name: 'Contacts',
  },
];

export const Navbar = (props: Props) => {
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useIsLogged()!;
  const initialColor = location.pathname === '/' ? 'inherit' : '#2D6A4F';
  const [background, setBackground] = useState(initialColor);
  const navStyle = {
    background: background,
  };

  const scrollEvent = () => {
    const backgroundcolor = window.scrollY < 140 && location.pathname === '/' ? 'inherit' : '#000';

    setBackground(backgroundcolor);
  };

  const logout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const initialColor = location.pathname === '/' ? 'inherit' : '#5d7963';
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

  return (
    <div className={styles.nav} style={navStyle}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="https://www.theludlownyc.com/accessibility/home.jpg"
            className={styles.houselogo}
            alt="logo"
          />
        </Link>
      </div>
      <div className={styles.menu}>
        <ul className="menu-list">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
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
              <Link className={styles.auth} to="/catalog">
                Catalog
              </Link>
            )}
          </li>
          <li>
            {isLoggedIn && (
              <Link className={styles.auth} to="/houses">
                Houses
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

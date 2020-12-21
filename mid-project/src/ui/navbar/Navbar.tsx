import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

import { logout } from 'features/auth/models/isLoggedInSlice';
import { RootState } from 'reducers';
import { Action } from 'redux';

const mapDispatch = { logoutAction: logout };
interface Props {
  logoutAction: () => Action;
}

interface LinkInterface {
  path: string;
  name: string;
  isNeedLoggedIn: boolean;
}

const links: LinkInterface[] = [
  {
    path: '/',
    name: 'Home',
    isNeedLoggedIn: false,
  },
  {
    path: '/profile',
    name: 'Profile',
    isNeedLoggedIn: true,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    isNeedLoggedIn: false,
  },
];

const Navbar = ({ logoutAction }: Props) => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const location = useLocation();
  const initialColor = location.pathname === '/' ? 'inherit' : '#2D6A4F';
  const [background, setBackground] = useState(initialColor);
  const navStyle = {
    background: background,
  };

  const scrollEvent = () => {
    const backgroundcolor =
      window.scrollY < 140 && location.pathname === '/' ? 'inherit' : '#000';

    setBackground(backgroundcolor);
  };

  const logout = () => {
    localStorage.removeItem('loggedIn');
    logoutAction();
    // setIsLoggedIn(false);
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
                {link.isNeedLoggedIn && isLoggedIn && (
                  <Link className={styles.auth} to={link.path}>
                    {link.name}
                  </Link>
                )}
                {!link.isNeedLoggedIn && (
                  <Link className={styles.auth} to={link.path}>
                    {link.name}
                  </Link>
                )}
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

export default connect(null, mapDispatch)(Navbar);
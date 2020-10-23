import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className="nav">
      <div className="logo">LOGO</div>
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="auth" to="/signin">
              Sign in
            </Link>
          </li>
          <li>
            <Link className="auth" to="/signup">
              Sign up
            </Link>
          </li>
          <li>
            <Link className="auth" to="/company">
              About us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

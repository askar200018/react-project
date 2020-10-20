import React from 'react';
import { Counter } from '../../features/counter';
import logo from './images/logo.svg';
import './home.css';

export const Home: React.FC = () => {
  return (
    <main className="page page--home">
      <div className="header">
        <div className="wrapper-title">
          <h1 className="title">DREAM HOUSE</h1>
        </div>
      </div>
      <section className="hero">
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
      </section>
    </main>
  );
};

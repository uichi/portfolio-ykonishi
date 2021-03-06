import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yuichi Konishi</title>
      </Helmet>
      <div className="wrapper">
        <header>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="list__item">
                <Link className="glitch" data-text="Profile" to="/profile">Profile</Link>
              </li>
              <li className="list__item">
                <Link className="glitch" data-text="Works" to="/works">Works</Link>
              </li>
              <li className="list__item">
                <Link className="glitch" data-text="Contact" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="site-title">
            <p className="site-title__first-line">Yuichi</p>
            <p className="site-title__second-line">Konishi</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
};

export default Home;
import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import Footer from './footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yuichi Konishi</title>
      </Helmet>
      <div class="wrapper">
        <header>
          <nav class="navigation">
            <ul class="navigation__list list">
              <li class="list__item"><a class="glitch" data-text="Home" href="./index.html">Home</a></li>
              <li class="list__item">
                <Link class="glitch" data-text="Profile" to="/profile">Profile</Link>
              </li>
              <li class="list__item">
                <Link class="glitch" data-text="Works" to="/works">Works</Link>
                </li>
              <li class="list__item"><a class="glitch" data-text="Contact" href="./contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <div class="site-title">
            <p class="site-title__first-line">Yuichi</p>
            <p class="site-title__second-line">Konishi</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
};

export default Home;
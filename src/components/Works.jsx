import React from 'react';
import Helmet from 'react-helmet';

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Works | Yuichi Konishi</title>
      </Helmet>
      <div className="wrapper">
        <header>
          <h1 className="page-title">Works</h1>
        </header>
        <main className="main">
          <div className="work">
            <figure className="work__figure">
              <img src="./images/daifuku.png" className="work__image" />
            </figure>
            <h2 className="work__title">DAIFUKU</h2>
            <div className="work__role">
              <span className="role-title">Role<span className="colon">:</span></span>
              <ul className="role-list">
                <li className="role-list__item">フロントエンド</li>
                <li className="role-list__item">バックエンド</li>
                <li className="role-list__item">インフラ</li>
              </ul>
            </div>
            <div className="work__technologies">
              <span className="technology-title">Tech<span className="colon">:</span></span>
              <ul className="technology-list">
                <li className="technology-list__item">Django</li>
                <li className="technology-list__item">Semantic UI</li>
                <li className="technology-list__item">Ubuntu</li>
                <li className="technology-list__item">MariaDB</li>
                <li className="technology-list__item">Nginx</li>
                <li className="technology-list__item">uWSGI</li>
              </ul>
            </div>
            <div className="work__assign-term">
              <span className="assign-term-title">Term<span className="colon">:</span></span>
              <span className="">2019 / 01 / 01 ~</span>
            </div>
            <a href="https://daihuku.xyz" className="work__link">
              visit site
            </a>
          </div>
          <div className="work">
            <figure className="work__figure">
              <img src="./images/daifuku.png" className="work__image" />
            </figure>
            <h2 className="work__title">DAIFUKU</h2>
            <div className="work__role">
              <span className="role-title">Role<span className="colon">:</span></span>
              <ul className="role-list">
                <li className="role-list__item">フロントエンド</li>
                <li className="role-list__item">バックエンド</li>
                <li className="role-list__item">インフラ</li>
              </ul>
            </div>
            <div className="work__technologies">
              <span className="technology-title">Tech<span className="colon">:</span></span>
              <ul className="technology-list">
                <li className="technology-list__item">Django</li>
                <li className="technology-list__item">Semantic UI</li>
                <li className="technology-list__item">Ubuntu</li>
                <li className="technology-list__item">MariaDB</li>
                <li className="technology-list__item">Nginx</li>
                <li className="technology-list__item">uWSGI</li>
              </ul>
            </div>
            <div className="work__assign-term">
              <span className="assign-term-title">Term<span className="colon">:</span></span>
              <span className="">2019 / 01 / 01 ~</span>
            </div>
            <a href="https://daihuku.xyz" className="work__link">
              visit site
            </a>
          </div>
        </main>
      </div>
    </>
  )
}

export default Works;
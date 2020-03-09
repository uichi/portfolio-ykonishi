import React from 'react';
import Helmet from 'react-helmet';

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Works | Yuichi Konishi</title>
      </Helmet>
      <div class="wrapper">
        <header>
          <h1 class="page-title">Works</h1>
        </header>
        <main class="main">
          <div class="work">
            <figure class="work__figure">
              <img src="./images/daifuku.png" class="work__image" />
            </figure>
            <h2 class="work__title">DAIFUKU</h2>
            <div class="work__role">
              <span class="role-title">Role<span class="colon">:</span></span>
              <ul class="role-list">
                <li class="role-list__item">フロントエンド</li>
                <li class="role-list__item">バックエンド</li>
                <li class="role-list__item">インフラ</li>
              </ul>
            </div>
            <div class="work__technologies">
              <span class="technology-title">Tech<span class="colon">:</span></span>
              <ul class="technology-list">
                <li class="technology-list__item">Django</li>
                <li class="technology-list__item">Semantic UI</li>
                <li class="technology-list__item">Ubuntu</li>
                <li class="technology-list__item">MariaDB</li>
                <li class="technology-list__item">Nginx</li>
                <li class="technology-list__item">uWSGI</li>
              </ul>
            </div>
            <div class="work__assign-term">
              <span class="assign-term-title">Term<span class="colon">:</span></span>
              <span class="">2019 / 01 / 01 ~</span>
            </div>
            <a href="https://daihuku.xyz" class="work__link">
              visit site
            </a>
          </div>
          <div class="work">
            <figure class="work__figure">
              <img src="./images/daifuku.png" class="work__image" />
            </figure>
            <h2 class="work__title">DAIFUKU</h2>
            <div class="work__role">
              <span class="role-title">Role<span class="colon">:</span></span>
              <ul class="role-list">
                <li class="role-list__item">フロントエンド</li>
                <li class="role-list__item">バックエンド</li>
                <li class="role-list__item">インフラ</li>
              </ul>
            </div>
            <div class="work__technologies">
              <span class="technology-title">Tech<span class="colon">:</span></span>
              <ul class="technology-list">
                <li class="technology-list__item">Django</li>
                <li class="technology-list__item">Semantic UI</li>
                <li class="technology-list__item">Ubuntu</li>
                <li class="technology-list__item">MariaDB</li>
                <li class="technology-list__item">Nginx</li>
                <li class="technology-list__item">uWSGI</li>
              </ul>
            </div>
            <div class="work__assign-term">
              <span class="assign-term-title">Term<span class="colon">:</span></span>
              <span class="">2019 / 01 / 01 ~</span>
            </div>
            <a href="https://daihuku.xyz" class="work__link">
              visit site
            </a>
          </div>
        </main>
      </div>
    </>
  )
}

export default Works;
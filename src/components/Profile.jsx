import React from 'react';
import Helmet from 'react-helmet';
import profileImage from '../assets/images/sample.png';

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Yuichi Konishi</title>
      </Helmet>
      <div class="wrapper">
        <header>
          <h1 class="page-title">Profile</h1>
        </header>
        <main>
          <div class="profile">
            <figure class="profile__figure profile-figure">
              <img src={profileImage} class="profile-figure__image" />
            </figure>
            <div class="profile__name">
              <span class="profile-title">Name<span class="colon">:</span></span>
              <span>Yuichi Konishi</span>
            </div>
            <div class="profile__job">
              <span class="job-title">Job<span class="colon job">:</span></span>
              <span>Webエンジニア</span>
            </div>
            <div class="profile__email">
              <span class="email-title">Email<span class="colon email">:</span></span>
              <span>curry_and_coffee@ykonishi.tokyo</span>
            </div>
            <div class="profile__skill">
              <div class="skill-title">Skill<span class="colon skill">:</span></div>
              <ul class="skill-list">
                <li class="skill-list__item">React</li>
                <li class="skill-list__item">Redux</li>
                <li class="skill-list__item">Material UI</li>
                <li class="skill-list__item">Semantic UI</li>
                <li class="skill-list__item">CoffeeScript</li>
                <li class="skill-list__item">SCSS</li>
                <li class="skill-list__item">jQuery</li>
                <li class="skill-list__item">Django</li>
                <li class="skill-list__item">CakePHP2</li>
                <li class="skill-list__item">CakePHP3</li>
                <li class="skill-list__item">知的財産管理技能士</li>
              </ul>
            </div>
            <div class="profile__biography">
              <div class="biography-title">Biography</div>
              <p>大学4年のときに、1年間のWebエンジニアのインターンを経て、卒業後もWebエンジニアの道に進んだ。</p>
              <p>これまでに携わった技術は数多く、CMS、フルスタックWebフレームワーク、サーバーレスなどWeb開発技術を網羅的に経験してきた。</p>
              <p>バックエンドからフロントエンド、時にはインフラを担当することもあり各分野をフレキシブルに対応できる。</p>
              <p>さらに、クライアントからの要求に対する要件定義や技術提案などの経験もあり、上流工程から下流工程までもが対応可能。</p>
            </div>
          </div>
        </main>
        <footer class="footer">
          <small>&copy; Yuichi Konishi</small>
        </footer>
      </div>
    </>
  )
}

export default Profile;
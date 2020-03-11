import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

const Profile = () => {
  const [profile, setProfile] = useState({
    image: '',
    name: '',
    job: '',
    email: '',
    technologies: [],
    biography: ''
  })

  useEffect(() => {
    const url = new URL(process.env.REACT_APP_MICRO_CMS_API_URL);
    url.pathname = '/api/v1/profile'
    fetch(url, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_MICRO_CMS_API_KEY
      },
    })
    .then(res => res.json())
    .then(res => setProfile(res))
    .catch(error => {
      console.log(error)
    })
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Profile | Yuichi Konishi</title>
      </Helmet>
      <div className="wrapper">
        <header>
          <h1 className="page-title">Profile</h1>
        </header>
        <main>
          <div className="profile">
            <figure className="profile__figure profile-figure">
              <img src={profile.image.url} className="profile-figure__image" alt="profile img" />
            </figure>
            <div className="profile__name">
              <span className="profile-title">Name<span className="colon">:</span></span>
              <span>{profile.name}</span>
            </div>
            <div className="profile__job">
              <span className="job-title">Job<span className="colon job">:</span></span>
              <span>{profile.job}</span>
            </div>
            <div className="profile__email">
              <span className="email-title">Email<span className="colon email">:</span></span>
              <span>{profile.email}</span>
            </div>
            <div className="profile__skill">
              <div className="skill-title">Skill<span className="colon skill">:</span></div>
              <ul className="skill-list">
                {profile.technologies.map((technology, index) => {
                  return  (
                    <li key={index} className="skill-list__item">{technology.name}</li>
                  )
                })}
              </ul>
            </div>
            <div className="profile__biography">
              <div className="biography-title">Biography</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: profile.biography
                }}
              />
            </div>
          </div>
        </main>
        <footer className="footer">
          <small>&copy; Yuichi Konishi</small>
        </footer>
      </div>
    </>
  )
}

export default Profile;
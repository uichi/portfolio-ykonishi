import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const url = new URL(process.env.REACT_APP_MICRO_CMS_API_URL);
    url.pathname = '/api/v1/works'
    fetch(url, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_MICRO_CMS_API_KEY
      },
    })
    .then(res => res.json())
    .then(res => setWorks(res.contents))
    .catch(error => {
      console.log(error)
    })
  }, []);

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
          {works.map(work => {
            return (
              <div key={work} className="work">
                <figure className="work__figure">
                  <img src={work.image.url} className="work__image" alt="実績の画像" />
                </figure>
                <h2 className="work__title">{work.name}</h2>
                <div className="work__role">
                  <span className="role-title">Role<span className="colon">:</span></span>
                  <ul className="role-list">
                    {work.roles.map((role, index) => {
                      return (
                        <li key={index} className="role-list__item">{role.name}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className="work__technologies">
                  <span className="technology-title">Tech<span className="colon">:</span></span>
                  <ul className="technology-list">
                    {work.technologies.map((technology, index) => {
                      return (
                        <li key={index} className="technology-list__item">{technology.name}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className="work__assign-term">
                  <span className="assign-term-title">Term<span className="colon">:</span></span>
                  <span className="">{work.startDate}</span>
                </div>
                <a href="https://daihuku.xyz" className="work__link" rel="noreferrer noopener" target="_blank">
                  visit site
                </a>
              </div>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default Works;
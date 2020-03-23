import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import useReactRouter from 'use-react-router';
import Loading from './Loading';
import Menu from './Menu';
import Footer from './Footer';

const Works = () => {
  const { history } = useReactRouter();
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);
  const [password, setPassword] = useState('');

  useEffect(() => {
    let cleanedUp = false;
    const url = new URL(process.env.REACT_APP_MICRO_CMS_API_URL);
    url.pathname = '/api/v1/works'
    fetch(url, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_MICRO_CMS_API_KEY
      },
    })
    .then(res => res.json())
    .then(res => {
      if (!cleanedUp) {
        setWorks(res.contents)
      }
    })
    .catch(error => {
      console.log(error)
    })
    .then(() => setTimeout(() => setLoading(false), 1000));

    const cleanup = () => {
      cleanedUp = true;
    };
    return cleanup;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== process.env.REACT_APP_SECRET_WORKS_KEY) return;
    history.push(`secret-works/?password=${process.env.REACT_APP_SECRET_WORKS_KEY}`);
  };

  if (loading) return <Loading loading={loading} />

  return (
    <>
      <Helmet>
        <title>Works | Yuichi Konishi</title>
      </Helmet>
      <div className="wrapper">
        <Menu />
        <header>
          <h1 className="page-title">Works</h1>
        </header>
        <main className="main works">
          {works.map((work, index) => {
            const url = new URL(process.env.REACT_APP_MICRO_CMS_API_URL);
            url.pathname = `/api/v1/works${work.id}`
            // Shape the date.
            const startDateObject = new Date(work.startDate);
            let workTerm = startDateObject.getFullYear() + ' / ' +
            ('0' + (startDateObject.getMonth() + 1)).slice(-2) + ' / ' +
            ('0' + startDateObject.getDate()).slice(-2) + ' ~ ';
            if(!!work.endDate) {
              const endDateObject = new Date(work.startDate);
              workTerm = workTerm +
              endDateObject.getFullYear() + ' / ' +
              ('0' + (endDateObject.getMonth() + 1)).slice(-2) + ' / ' +
              ('0' + endDateObject.getDate()).slice(-2);
            }
            return (
              <div key={index} className="work">
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
                  <span className="">{workTerm}</span>
                </div>
                <div className="work__link" onClick={() => history.push(`/works/${work.id}`)}>
                  Detail
                </div>
              </div>
            )
          })}
          <form className="secret-works-form" onSubmit={handleSubmit}>
            <h2 className="secret-works-form__title">業務実績を閲覧する</h2>
            <div className="input-field">
              <input className="input-field__password" type="text" placeholder="パスワードを入力" onChange={ e => setPassword(e.target.value) } />
              <button className="input-field__button" type="submit">送信</button>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Works;
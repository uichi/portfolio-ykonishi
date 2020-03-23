import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import useReactRouter from 'use-react-router';
import Loading from './Loading';
import Menu from './Menu';
import Footer from './Footer';

const SecretWorks = (props) => {
  const { history } = useReactRouter();
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    let cleanedUp = false;
    const query = queryString.parse(props.location.search);
    const url = new URL(process.env.REACT_APP_MICRO_CMS_API_URL);
    url.pathname = '/api/v1/secret-works'
    if ( query.password === process.env.REACT_APP_SECRET_WORKS_KEY ) {
      fetch(url, {
        headers: {
          'X-API-KEY': process.env.REACT_APP_MICRO_CMS_API_KEY
        },
      })
      .then(res => res.json())
      .then(res => {
        if (!cleanedUp) {
          setWorks(res.contents);
        }
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => setTimeout(() => setLoading(false), 1000));
    } else {
      setLoading(false)
    }

    const cleanup = () => {
      cleanedUp = true;
    };
    return cleanup;
  }, [props]);

  if (loading) return <Loading loading={loading} />

  return (
    <>
      <Helmet>
        <title>Secret Works | Yuichi Konishi</title>
      </Helmet>
      <div className="wrapper">
        <Menu />
        <header>
          <h1 className="page-title">Works</h1>
        </header>
        <main className="main works">
          {works.map((work, index) => {
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
                  <span className="role-title">Role<span className="colon role">:</span></span>
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
                <Link className="work__link" to={`/secret-works/${work.id}`}>Detail</Link>
              </div>
            )
          })}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SecretWorks;
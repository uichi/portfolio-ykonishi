import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Loading from './Loading';
import Menu from './Menu';
import Footer from './Footer';

const SecretWorkDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [work, setWork] = useState({});

  useEffect(() => {
    let cleanedUp = false;
    const url = new URL(process.env.REACT_APP_MICRO_CMS_API_URL);
    url.pathname = `/api/v1/secret-works/${props.match.params.id}`
    fetch(url, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_MICRO_CMS_API_KEY
      },
    })
    .then(res => res.json())
    .then(res => {
      if (!cleanedUp) {
        setWork(res)
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
  }, [props]);

  const RenderLink = ({link}) => {
    if (!link) return <></>;
    return (
      <a href={link} className="work__link" rel="noreferrer noopener" target="_blank">
        visit site
      </a>
    );
  };

  if (loading) return <Loading loading={loading} />

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
    <>
      <Helmet>
        <title>Secret Work | Yuichi Konishi</title>
      </Helmet>
      <div className="wrapper">
        <header>
          <h1 className="page-title">{work.name}</h1>
        </header>
        <Menu />
        <div className="work-detail">
          <figure className="work__figure">
            <img src={work.image.url} className="work__image" alt="実績の画像" />
          </figure>
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
          <div className="work__description work-description">
            <div className="work-description__title">Detail</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: work.description
                }}
              />
          </div>
          <RenderLink link={work.link} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SecretWorkDetail;
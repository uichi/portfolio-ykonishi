import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Menu from './Menu';
import Footer from './Footer';

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Contact | Yuichi Konishi</title>
      </Helmet>
      <div className="wrapper">
        <div className="contact">
          <Menu />
          <header>
            <h1 className="page-title">Contact</h1>
          </header>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>お名前: <input type="text" name="name"/></label>
            </p>
            <p>
              <label>Email: <input type="email" name="email"/></label>
            </p>
            <p>
              <label>会社名: <input type="text" name="name"/></label>
            </p>
            <p>
              <label>本文: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">送信</button>
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
};

export default Contact;
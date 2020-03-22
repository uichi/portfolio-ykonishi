import React from 'react';
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
          <form className="contact-form" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <label>
              お名前<span className="required-attention">(必須)</span>
              <input className="contact-form__input" type="text" name="username" required/>
            </label>
            <label>
              Email<span className="required-attention">(必須)</span>
              <input className="contact-form__input" type="email" name="email" required/>
            </label>
            <label>
              会社名
              <input className="contact-form__input" type="text" name="company"/>
            </label>
            <label>
              本文<span className="required-attention">(必須)</span>
              <textarea className="contact-form__textarea field__textarea" name="message" required></textarea>
            </label>
            <button className="contact-form__submit" type="submit">送信</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
};

export default Contact;
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config
} from 'react-spring'
import 'normalize-css'

const Nav = styled(animated.nav)`
  background: ghostwhite;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  ul {
    margin: 0;
    padding: 0;
  }
`

const Li = styled(animated.li)`
  list-style: none;

  a {
    color: royalblue;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1.3;
  }
`

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'Profile', link: '/profile' },
  { name: 'Works', link: '/works' },
  { name: 'Contact', link: '/contact' }
];

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  // Set refs - required for useChain
  const navRef = useRef();
  const liRef = useRef();

  // Setup animation for nav element
  const springProps = useSpring({
    ref: navRef,
    config: config.default,
    from: { width: '0%' },
    to: { width: showMenu ? '100%' : '0%' }
  });

  // Setup animations for nav items
  const liTransitions = useTransition(
    showMenu ? menuItems : [],
    item => item.name,
    {
      ref: liRef,
      trail: 400 / menuItems.length,
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(20px)' }
    }
  );

  // On showMenu, start with nav animationm then nav items
  useChain(showMenu ? [navRef, liRef] : [liRef, navRef], [
    0,
    showMenu ? 0.4 : 0.6
  ]);

  return (
    <>
      <div className="humberger-menu">
        <Link to="#" className={ showMenu ? "humberger-menu__trigger active" : "humberger-menu__trigger" } onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
      <Nav className="menu" style={springProps}>
        <ul>
          {liTransitions.map(({ item, key, props }) => (
            <Li key={key} style={props}>
              <Link to={item.link}>{item.name}</Link>
            </Li>
          ))}
        </ul>
      </Nav>
    </>
  );
};

export default Menu;

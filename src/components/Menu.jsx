import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config
} from 'react-spring'
import 'normalize-css'

const Button = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 2;
`
const Nav = styled(animated.nav)`
  background: ghostwhite;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

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
  { name: 'Works', link: '/works' }
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
      <Button onClick={toggleMenu}>Toggle Menu</Button>
      <Nav className="menu" style={springProps}>
        <ul>
          {liTransitions.map(({ item, key, props }) => (
            <Li key={key} style={props}>
              <a href={item.link}>{item.name}</a>
            </Li>
          ))}
        </ul>
      </Nav>
    </>
  );
};

export default Menu;

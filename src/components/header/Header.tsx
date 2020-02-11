/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import themeIcon from './themeIcon';

const Header: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <Helmet>
        <html lang="en" className={`theme--${theme}`} />
      </Helmet>

      <div className="header__logo">CW</div>

      <div className="header__menu">
        <NavLink
          exact
          className="header__menu-link"
          activeClassName="header__menu-link--active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="header__menu-link"
          activeClassName="header__menu-link--active"
          to="/basic"
        >
          Basic
        </NavLink>
        <NavLink
          className="header__menu-link"
          activeClassName="header__menu-link--active"
          to="/mirror"
        >
          Mirror
        </NavLink>
        <NavLink
          className="header__menu-link"
          activeClassName="header__menu-link--active"
          to="/whiteboard"
        >
          Whiteboard
        </NavLink>
      </div>

      <div className="header__menu">
        <a
          href="#"
          className="header__menu-link header__menu-link--capitalize"
          onClick={switchTheme}
          onKeyDown={() => {}}
        >
          <span className="header__menu-link-icon cw-icon">{themeIcon}</span>
          <span className="header__menu-link-sm">{theme}</span>
        </a>
      </div>
    </>
  );
};

export default Header;

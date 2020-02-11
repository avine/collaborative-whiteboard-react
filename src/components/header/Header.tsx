/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
        <Link className="header__menu-link" to="/">
          Home
        </Link>
        <Link className="header__menu-link" to="/basic">
          Basic
        </Link>
        <Link className="header__menu-link" to="/mirror">
          Mirror
        </Link>
        <Link className="header__menu-link" to="/whiteboard">
          Whiteboard
        </Link>
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

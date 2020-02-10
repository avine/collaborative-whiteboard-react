/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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
        <a className="header__menu-link" href="#">
          Home
        </a>
        <a className="header__menu-link" href="#">
          Basic
        </a>
        <a className="header__menu-link" href="#">
          Mirror
        </a>
        <a className="header__menu-link" href="#">
          Whiteboard
        </a>
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

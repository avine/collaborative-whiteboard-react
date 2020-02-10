/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';
import React, { useState } from 'react';
import Icon from '../../cw/components/icon/Icon';

const Header: React.FC = () => {
  const [theme, setTheme] = useState('light');

  document.documentElement.classList.add(`theme--${theme}`);

  const switchTheme = () => {
    document.documentElement.classList.remove(`theme--${theme}`);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className="logo">CW</div>

      <div className="menu">
        <a className="menu-link" href="#">
          Home
        </a>
        <a className="menu-link" href="#">
          Basic
        </a>
        <a className="menu-link" href="#">
          Mirror
        </a>
        <a className="menu-link" href="#">
          Whiteboard
        </a>
      </div>

      <div className="menu">
        <a
          href="#"
          className="menu-link menu-link--capitalize"
          onClick={() => {}}
        >
          <span className="menu-link-sm">
            <Icon icon="drawLine" />
          </span>
          <span
            role="button"
            tabIndex={0}
            className="menu-link-sm"
            onClick={switchTheme}
            onKeyDown={() => {}}
          >
            {theme}
          </span>
        </a>
      </div>
    </>
  );
};

export default Header;

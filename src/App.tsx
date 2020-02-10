import './App.scss';
import './cw/styles/cw.core.scss';
import React from 'react';
import Header from './components/header/Header';
import Whiteboard from './cw/components/whiteboard/Whiteboard2';

const App: React.FC = () => {
  return (
    <>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Whiteboard />
        </div>
      </div>
      <div className="version">1.0.1</div>
    </>
  );
};

export default App;

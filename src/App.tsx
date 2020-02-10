import './App.scss';
import './collaborative-whiteboard/styles/cw.core.scss';
import React from 'react';
import Whiteboard from './collaborative-whiteboard/components/whiteboard/Whiteboard2';
import Header from './components/header/Header';

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

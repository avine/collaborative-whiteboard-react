import './App.scss';
import './collaborative-whiteboard/styles/cw.core.scss';
import React from 'react';
import Whiteboard from './collaborative-whiteboard/components/whiteboard/Whiteboard2';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <>
      <div className="app__layout">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__main">
          <Whiteboard />
        </div>
      </div>
      <div className="app__version">1.0.1</div>
    </>
  );
};

export default App;

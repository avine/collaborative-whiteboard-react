import './App.scss';
import './collaborative-whiteboard/styles/cw.core.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Whiteboard from './collaborative-whiteboard/components/whiteboard/Whiteboard2';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app__layout">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/basic">
              <div>Basic</div>
            </Route>
            <Route path="/mirror">
              <div>Mirror</div>
            </Route>
            <Route path="/whiteboard">
              <Whiteboard />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="app__version">1.0.1</div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={BlogPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

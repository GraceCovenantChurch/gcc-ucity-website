import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Router = () => (
  <div className="App">
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  </div>
);

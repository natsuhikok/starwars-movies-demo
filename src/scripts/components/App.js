import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Films from './Films';
import Episode from './Episode';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <h1>
        <Link to="/">Star Wars Films</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={Films} />
        <Route path="/:id" component={Episode} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

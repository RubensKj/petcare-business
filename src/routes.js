import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Preview from './Pages/Preview';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/preview' component={Preview} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
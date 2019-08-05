import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateService from './Pages/CreateService';
import Preview from './Pages/Preview';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route path='/cadastrar-servico' component={CreateService} />
          <Route exact path='/' component={Preview} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
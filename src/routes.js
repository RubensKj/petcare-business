import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateService from './Pages/CreateService';
import ListProducts from './Pages/ListProducts';
import Preview from './Pages/Preview';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route path='/cadastrar-servico' component={CreateService} />
          <Route path='/lista-produtos' component={ListProducts} />
          <Route exact path='/' component={Preview} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
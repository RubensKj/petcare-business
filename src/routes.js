import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateService from './Pages/CreateService';
import EditPage from './Pages/EditPage';
import ListProducts from './Pages/ListProducts';
import ListRequests from './Pages/ListRequests';
import Preview from './Pages/Preview';

import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Preview} />
          <Route path='/cadastrar' component={SignUp} />
          <Route path='/entrar' component={LogIn} />
          <Route path='/cadastrar-servico' component={CreateService} />
          <Route exact path='/produtos' component={ListProducts} />
          <Route path='/pedidos' component={ListRequests} />
          <Route path='/produtos/id/editar' component={EditPage} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
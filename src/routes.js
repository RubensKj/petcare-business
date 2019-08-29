import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoute';

import CreateService from './Pages/CreateService';
import CreateProduct from './Pages/CreateProduct';
import EditPage from './Pages/EditPage';
import EditPageService from './Pages/EditPageService';

import ListProducts from './Pages/ListProducts';
import ListServices from './Pages/ListServices';
import ListRequests from './Pages/ListRequests';
import ListEvaluations from './Pages/ListEvaluations';

import Order from './Pages/Order';
import Preview from './Pages/Preview';
import Main from './Pages/Main';
import SettingsPage from './Pages/SettingsPage';

import SignUp from './Pages/SignUp';
import SignUpCompany from './Pages/SignUpCompany';
import SignUpOwner from './Pages/SignUpOwner';
import LogIn from './Pages/LogIn';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Main} />
          <PrivateRoute path='/dashboard' component={Preview} />
          
          <Route path='/entrar' component={LogIn} />
          <Route path='/cadastrar' component={SignUp} />
          <Route path='/create-petshop' component={SignUpCompany} />
          <Route path='/finalizar' component={SignUpOwner} />

          <PrivateRoute path='/cadastrar-servico' component={CreateService} />
          <PrivateRoute path='/cadastrar-produto' component={CreateProduct} />
          <PrivateRoute exact path='/produtos' component={ListProducts} />
          <PrivateRoute exact path='/servicos' component={ListServices} />
          <PrivateRoute exact path='/pedidos' component={ListRequests} />
          <PrivateRoute exact path='/avaliacoes' component={ListEvaluations} />
          <PrivateRoute path='/configuracoes' component={SettingsPage} />
          <PrivateRoute path='/pedidos/id' component={Order} />
          <PrivateRoute path='/produtos/:id/editar' component={EditPage} />
          <PrivateRoute path='/servicos/:id/editar' component={EditPageService} />
          <Route path='*' component={Preview} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
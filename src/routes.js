import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateService from './Pages/CreateService';
import CreateProduct from './Pages/CreateProduct';
import EditPage from './Pages/EditPage';

import ListProducts from './Pages/ListProducts';
import ListServices from './Pages/ListServices';
import ListRequests from './Pages/ListRequests';
import ListEvaluations from './Pages/ListEvaluations';

import Order from './Pages/Order';
import Preview from './Pages/Preview';
import SettingsPage from './Pages/SettingsPage';

import SignUp from './Pages/SignUp';
import SignUpCompany from './Pages/SignUpCompany';
import SignUpOwner from './Pages/SignUpOwner';
import LogIn from './Pages/LogIn';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Preview} />
          <Route path='/cadastrar' component={SignUp} />
          <Route path='/create-petshop' component={SignUpCompany} />
          <Route path='/finalizar' component={SignUpOwner} />
          <Route path='/entrar' component={LogIn} />
          <Route path='/cadastrar-servico' component={CreateService} />
          <Route path='/cadastrar-produto' component={CreateProduct} />
          <Route exact path='/produtos' component={ListProducts} />
          <Route exact path='/servicos' component={ListServices} />
          <Route exact path='/pedidos' component={ListRequests} />
          <Route exact path='/avaliacoes' component={ListEvaluations} />
          <Route path='/configuracoes' component={SettingsPage} />
          <Route path='/pedidos/id' component={Order} />
          <Route path='/produtos/id/editar' component={EditPage} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
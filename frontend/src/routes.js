import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import Medicao from './pages/Medicao/index';
import Cadastro from './pages/Cadastro/index';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ Login }/>
        <Route path='/medicao' component={ Medicao }/>
        <Route path='/cadastro' component={ Cadastro }/>
      </Switch>
  </BrowserRouter>
  );
}
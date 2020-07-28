import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastrarVideo from './pages/Cadastrar/Video';
import CadastrarCategoria from './pages/Cadastrar/Categoria';
import ErrorPage from './pages/ErrorPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastrarVideo}/>
      <Route path="/cadastro/categoria" component = {CadastrarCategoria}/>
      <Route component={ErrorPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

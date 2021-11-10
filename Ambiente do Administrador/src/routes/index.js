import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import Cadastrar from '../views/Cadastrar';
import Consultar from '../views/Consultar';
import Gerenciar from '../views/Gerenciar';
import Perfil from '../views/Perfil';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/admin" exact component={Login} />
                <Route path="/admin/home" exact component={Home} />
                <Route path="/admin/home/cadastrar" exact component={Cadastrar} />
                <Route path="/admin/home/consultar" exact component={Consultar} />
                <Route path="/admin/home/gerenciar" exact component={Gerenciar} />
                <Route path="/admin/home/perfil" exact component={Perfil} />
            </Switch>
        </BrowserRouter>
    )
}
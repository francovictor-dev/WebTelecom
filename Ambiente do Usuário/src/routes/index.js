import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//var LandingPage = require('../views/Landing Page/index.html');
//import LandingPage from '../views/Landing Page/index';
import Login from '../views/Login';
import Home from '../views/Home';
import Boletos from '../views/Boletos';
import Perfil from '../views/Perfil';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/usuario" exact component={Login} />
                <Route path="/usuario/home" exact component={Home} />
                <Route path="/usuario/boletos" exact component={Boletos} />
                <Route path="/usuario/perfil" exact component={Perfil} />
            </Switch>
        </BrowserRouter>
    )
}
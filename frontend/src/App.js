import React from 'react'
import './App.css';
import {Home} from './ui/Home'
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import {Navigator} from "./components/Navigator";

export const App = () => (
    <>

      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
);



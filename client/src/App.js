import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { gapi } from "gapi-script";

const App = () =>{
    gapi.load("client:auth2", () => {
        gapi.auth2.init({
          clientId:
            "*****.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });
    return(
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App; 
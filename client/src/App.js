import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { gapi } from "gapi-script";

const App = () =>{
    gapi.load("client:auth2", () => {
        gapi.auth2.init({
          clientId:
            "812854746478-c3tb0udgod42vt17ndhsc4do7slt3p5b.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });

      const user = JSON.parse(localStorage.getItem('profile'));
    return(
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
                {/* Switch b/w different components */}
                <Switch> 
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts"/>)} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App; 
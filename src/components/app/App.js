import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import AdminPanel from './admin/AdminPanel'
import UserPanel from './user/User'
import Login from '../../auth/login/Login'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={UserPanel} />
                <Route path='/main' component={UserPanel} />
                <Route path='/login' component={Login} />
                <Route path="/admin" component={AdminPanel} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ClientInfo from './payer-credentials/PayerCredentials'
import PaymentsWin from './payment-methods/PaymentWindow'
import CompanyInfo from './company-info/CompanyInfo'
import {BrowserRouter, Route} from "react-router-dom";
import AdminPanel from './admin/AdminPanel'
import UserPanel from './user/User'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route path='/main' component={UserPanel}/>
                <Route path="/admin" component={AdminPanel} />
                {/*<ClientInfo/>*/}
                {/*<PaymentsWin/>*/}
                {/*<CompanyInfo/>*/}
            </div>
        </BrowserRouter>
    );
  }
}

export default App;

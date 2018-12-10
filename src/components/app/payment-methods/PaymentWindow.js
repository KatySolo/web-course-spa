import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './PaymentWindow.css'
import AllBanks from './all-banks-payment/AllBanksMethod'
import MyCard from './credit-card-payment/CreditCardMethod'
import Require from './require-payment/RequireMethod'
import Navigation from './navigation/Navigation'

class PaymentWindow extends Component {

    handleData = (value) => {
      console.log(value);
    };

    render() {
        return (
            <BrowserRouter>
                <div className="payments-window">
                    <Navigation/>
                    <div className="payments-methods">
                        <Switch>
                            <Route path="/card" render={() => <MyCard handleData = {this.handleData} />}/>
                            <Route path="/all-banks" render={() => <AllBanks handleData = {this.handleData} />}/>
                            <Route path="/require" render={() => <Require handleData = {this.handleData} />}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default PaymentWindow

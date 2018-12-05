import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './PaymentWindow.css'
import AllBanks from './all-banks-payment/AllBanksMethod'
import MyCard from './credit-card-payment/CreditCardMethod'
import Require from './require-payment/RequireMethod'
import Navigation from './navigation/Navigation'

class PaymentWindow extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="payments-window">
                    <Navigation/>
                    <div className="payments-methods">
                        <Switch>
                            <Route path="/card" component={MyCard}/>
                            <Route path="/all-banks" component={AllBanks}/>
                            <Route path="/require" component={Require}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default PaymentWindow

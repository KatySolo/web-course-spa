import React, { Component } from 'react';
import './PaymentWindow.css'
import AllBanks from './all-banks-payment/AllBanksMethod'
import MyCard from './credit-card-payment/CreditCardMethod'
import Require from './require-payment/RequireMethod'
import card from "./card.png"
import bank from "./bank.png"

class PaymentWindow extends Component {
    render() {
        return (
            <div className="payments-window">
                <div className="actions-labels-panel">
                    <span className="pay-link">Заплатить</span>
                    <span className="require-link">Запросить платеж</span>
                </div>
                <div className="payment-methods-panel">
                    <div className="all-cards-link">
                        <img src={card} alt="card" className="card-ico" />С карты любого банка</div>
                    <div className="my-card-link">
                        <img src={bank} alt="bank" className="bank-ico" />Из своего интернет-банка</div>
                </div>
                <div className="payments-methods">
                    <MyCard/>
                    {/*<AllBanks/>*/}
                    {/*<Require/>*/}
                </div>

            </div>
        );
    }
}

export default PaymentWindow

import React, {Component} from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";
import card from "../card.png";
import bank from "../bank.png";

class Navigation extends Component
{
    constructor() {
        super();
        this.state = {checked: 'show'};
        this.handleRadio = this.handleRadio.bind(this);
    }

    handleRadio(e) {
        console.log(e.currentTarget.value);
        this.setState({
            checked: e.currentTarget.value

        });
    }
    render() {
        return(
            <div className="navigation">
                <div className="actions-labels-panel">
                    <label onClick={() => this.setState({checked: 'show'})}>
                        <NavLink to="/main/card" className="pay-link link">Заплатить</NavLink>
                    </label>
                    <label onClick={() => this.setState({checked: 'hide'})}>
                        <NavLink to="/main/require" className="require-link link">Запросить платеж</NavLink>
                    </label>
                </div>
                {this.state.checked === 'show' ? <div className="payment-methods-panel">
                    <NavLink to="/main/card" className="all-cards-link pay-links link">
                        <img src={card} alt="card" className="card-ico"/>С карты любого банка
                    </NavLink>
                    <NavLink to="/main/all-banks" className="my-card-link pay-links link">
                        <img src={bank} alt="bank" className="bank-ico"/>Из своего интернет-банка
                    </NavLink>
                </div>
                : ""}
            </div>
        );
    }
}

export default Navigation;

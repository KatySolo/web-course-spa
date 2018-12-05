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
        console.log(this);
        this.setState({
            checked: e.currentTarget.value

        });
    }
    render() {
        return(
            <div className="navigation">
                <input type="radio" name="methods" value="show" id="show" className="methods-radio"
                       checked={this.state.checked === "show"} onChange={this.handleRadio}/>
                <input type="radio" name="methods" value="hide" id="hide" className="methods-radio"
                       checked={this.state.checked === "hide"} onChange={this.handleRadio}/>
                <div className="actions-labels-panel">
                    {/*label ignored */}
                    {/*make gray background stay*/}
                    <label htmlFor="show">
                        <NavLink to="/card" className="pay-link link">Заплатить</NavLink>
                    </label>
                    <label htmlFor="hide">
                        <NavLink to="/require" className="require-link link">Запросить платеж</NavLink>
                    </label>
                </div>
                <div className="payment-methods-panel">
                    <NavLink to="/card" className="all-cards-link pay-links link">
                        <img src={card} alt="card" className="card-ico"/>С карты любого банка
                    </NavLink>
                    <NavLink to="/all-banks" className="my-card-link pay-links link">
                        <img src={bank} alt="bank" className="bank-ico"/>Из своего интернет-банка
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Navigation;

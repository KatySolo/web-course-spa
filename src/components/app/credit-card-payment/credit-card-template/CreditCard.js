import React, { Component } from 'react';
import './CreditCard.css'
import card_system from './card_systems.png'

class CreditCard extends Component{
    render(){
        return (
            <div className="my-bank-card">
                <div className="card-template">
                    <img src={ card_system } alt="cards-systems" className="cards-systems" />
                    <input type="text" placeholder="Номер карты" className="info-input card-number-input" pattern="[0-9]{16}" />
                    <input type="text" placeholder="ММ/ГГ" className="info-input expire-date-input" />
                    <input type="text" placeholder="CVC" className="info-input cvc-input" pattern="[0-9]{3}" />
                </div>
            </div>
        );
    }
}

export default CreditCard

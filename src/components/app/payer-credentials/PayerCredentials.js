import React, { Component } from 'react';
import './PayerCredentials.css'
import man from './man.jpg'

class PayerCredentials extends Component
{
    render() {
        return (
            <div className="payer-info">
                <div className="payer-info-layout">
                    <div className="payer-credentials">
                        <span className="payer-name">Индивидуальный предприниматель Швецова Мария Валерьевна </span>
                        <p className="contacts">
                            <span className="phone-number">+79122788686</span>
                            <span className="website">
                        <a href="a">www.mary.ru</a>
                    </span>
                            <span className="email">
                        <a href="mailto:mary@tochka.ru"> mary@tochka.ru</a>
                    </span>
                        </p>
                        <p className="company-info-link">
                            <a href="a">Информация о компании</a>
                        </p>
                        <p className="company-cred-link">
                            <a href="a">Показать реквизиты</a>
                        </p>
                    </div>
                    <div className="avatar-container">
                        <img id='avatar' src={man} alt='man' className="avatar"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PayerCredentials

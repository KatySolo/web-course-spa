import React, { Component } from 'react';
import './CreditCardInput.css'

class CreditCardInput extends Component {
    render() {
        return (
            <div className="data-input-container">
                <span className="input-label sum-label">Сумма</span>
                <input type="text" placeholder="От 1000 до 75 000Р" className="sum-input"/>
                <span className="input-label comment-label">Комментарий</span>
                <input type="text" placeholder="До 150 символов" className="comment-input" maxLength="150"/>
                <span className="input-label email-label-card">Ваша эл.почта</span>
                <input type="email" placeholder="Для квитанций об оплате" className="email-input"/>
                <div className="pay-button">Заплатить</div>
            </div>
        );
    }
}

export default CreditCardInput

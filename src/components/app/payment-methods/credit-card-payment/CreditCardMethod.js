import React, {Component} from 'react';
import './CreditCardMethod.css'
import card_system from "./card_systems.png";

class CreditCardMethod extends Component {

    constructor() {
        super();
        this.state = {
            card_number: '',
            expire_date: '',
            cvc: '',
            amount: '',
            comments:'',
            email: ''
        };

        this.submitData = this.submitData.bind(this);
    }

    submitData() {
        this.props.handleData(this.state);
    }

    render() {
        return (
            <div className="cards">
                    <div className="card-template">
                        <img src={ card_system } alt="cards-systems" className="cards-systems" />
                        <input type="text" placeholder="Номер карты" className="info-input card-number-input"
                               pattern="[0-9]{16}"
                               onChange={(e) => this.setState({card_number: e.target.value})}/>
                        <input type="text" placeholder="ММ/ГГ" className="info-input expire-date-input"
                               onChange={(e) => this.setState({expire_date: e.target.value})}/>
                        <input type="text" placeholder="CVC" className="info-input cvc-input" pattern="[0-9]{3}"
                               onChange={(e) => this.setState({cvc: e.target.value})}/>
                    </div>

                    <div className="data-input-container">
                        <span className="input-label sum-label">Сумма</span>
                        <input type="text" placeholder="От 1000 до 75 000Р" className="sum-input"
                               onChange={(e) => this.setState({amount: e.target.value})}/>
                        <span className="input-label comment-label">Комментарий</span>
                        <input type="text" placeholder="До 150 символов" className="comment-input" maxLength="150"
                               onChange={(e) => this.setState({comments: e.target.value})}/>
                        <span className="input-label email-label-card">Ваша эл.почта</span>
                        <input type="email" placeholder="Для квитанций об оплате" className="email-input-card"
                               onChange={(e) => this.setState({email: e.target.value})}/>
                        <button className="pay-button" onClick={this.submitData}>Заплатить</button>
                    </div>
            </div>
        );
    }
}

export default CreditCardMethod

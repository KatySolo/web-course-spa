import React, {Component} from 'react';
import './CreditCardMethod.css'
import card_system from "./card_systems.png";
import InputMask from 'react-input-mask'

class CreditCardMethod extends Component {

    constructor() {
        super();
        this.state = {
            cardNumber: '',
            cardNumberValid: false,
            expireDate: '',
            expireDateValid: false,
            cvc: '',
            cvcValid: false,
            amount: '',
            amountValid: false,
            comments:'',
            commentsValid: true,
            email: '',
            emailValid: false,
            formValid: false
        };

        this.submitData = this.submitData.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.checkCardNumber = this.checkCardNumber.bind(this);
        this.checkExpireDate = this.checkExpireDate.bind(this);
        this.checkCVC = this.checkCVC.bind(this);
        this.checkAmount = this.checkAmount.bind(this);
        this.checkComments = this.checkComments.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
    }

    submitData() {
        this.props.handleData({
            cardNumber: this.state.cardNumber,
            expireDate: this.state.expireDate,
            cvc: this.state.cvc,
            amount: this.state.amount,
            comments: this.state.comments,
            email: this.state.email
        });
    }
    checkCardNumber(e) {
        const num = e.target.value;

        (num.match(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/)) ?
            this.setState({cardNumberValid: true},() => this.validateForm()) :
            this.setState({cardNumberValid: false},() => this.validateForm());
    }

    checkExpireDate(e) {
        const date = e.target.value;
        (date.match(/^(0[1-9]|1[0-2])\/?|1[8-9]{1}|[2-9]{1}[0-9]{1}$/)) ?
            this.setState({expireDateValid: true},() => this.validateForm()) :
            this.setState({expireDateValid: false},() => this.validateForm());
    }

    checkCVC(e){
        (e.target.value.length === 3 ) ?
            this.setState({cvcValid: true}, () => this.validateForm()) :
            this.setState({cvcValid: false}, () => this.validateForm());
    }

    checkAmount(e) {
        const value = parseInt(e.target.value);
        (!isNaN(value) && value >= 1000 && value <= 75000) ?
            this.setState({amountValid: true},() => this.validateForm()) :
            this.setState({amountValid: false},() => this.validateForm());
    }

    checkComments(e) {
        (e.target.value.length <= 150) ?
            this.setState({commentsValid: true},() => this.validateForm()) :
            this.setState({commentsValid: false},() => this.validateForm());
    }

    checkEmail(e) {
        (e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) ?
            this.setState({emailValid: true},() => this.validateForm()) :
            this.setState({emailValid: false},() => this.validateForm());
    }

    validateForm(){
        this.setState({
            formValid: this.state.cardNumberValid && this.state.expireDateValid
            && this.state.cvcValid && this.state.amountValid && this.state.amountValid
            && this.state.commentsValid && this.state.emailValid
        });
    }

    render() {
        return (
            <div className="cards">
                    <div className="card-template">
                        <img src={ card_system } alt="cards-systems" className="cards-systems" />
                        <InputMask type="text" placeholder="Номер карты" mask="9999 9999 9999 9999" maskChar=" "
                               className="info-input card-number-input"
                               onChange={(e) => {
                                   this.setState({cardNumber: e.target.value});
                                   this.checkCardNumber(e);
                               }}/>
                        <InputMask type="text" placeholder="ММ/ГГ" mask="99/99" maskChar=" "
                               className="info-input expire-date-input"
                               onChange={(e) => {
                                   this.setState({expireDate: e.target.value});
                                   this.checkExpireDate(e);
                               }}/>
                        <input type="text" placeholder="CVC" className="info-input cvc-input" maxLength="3"
                               onChange={(e) => {
                                   this.setState({cvc: e.target.value});
                                   this.checkCVC(e);
                               }}/>
                    </div>

                    <div className="data-input-container">
                        <span className="input-label sum-label">Сумма</span>
                        <input type="text" placeholder="От 1000 до 75 000Р" className="sum-input" maxLength="6"
                               onChange={(e) => {
                                   this.setState({amount: e.target.value});
                                   this.checkAmount(e);
                               }}/>
                        <span className="input-label comment-label">Комментарий</span>
                        <input type="text" placeholder="До 150 символов" className="comment-input" maxLength="150"
                               onChange={(e) => {
                                   this.setState({comments: e.target.value});
                                   this.checkComments(e);
                               }}/>
                        <span className="input-label email-label-card">Ваша эл.почта</span>
                        <input type="email" placeholder="Для квитанций об оплате" className="email-input-card"
                               onChange={(e) => {
                                   this.setState({email: e.target.value});
                                   this.checkEmail(e);
                               }}/>
                        <button className="pay-button" onClick={this.submitData}
                                disabled={!this.state.formValid}>Заплатить</button>
                    </div>
            </div>
        );
    }
}

export default CreditCardMethod

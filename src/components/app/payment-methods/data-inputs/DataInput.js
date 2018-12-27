import React, {Component} from 'react';
import './DataInput.css'
import InputMask from 'react-input-mask'
import axios from "axios";

class DataInput extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            nameValid: false,
            bik:'',
            bikValid: false,
            numAccount:'',
            numAccountValid: false,
            nds: 'Без НДС',
            amount:'',
            amountValid: false,
            telNum: '',
            numberValid: false,
            email: '',
            emailValid: true,
            formValid: false
        };
        this.handleData = this.handleData.bind(this);
        this.validateForm = this.validateForm.bind(this);

        this.checkName = this.checkName.bind(this);
        this.checkBIK = this.checkBIK.bind(this);
        this.checkNumAccount = this.checkNumAccount.bind(this);
        this.checkAmount = this.checkAmount.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
        this.checkEmail = this.checkName.bind(this);

    }

    cleanForm = () => {
        const {_mobile, _email} = this.refs;
        _mobile.value = "";
        _email.value = "";
        this.state.name = '';
        this.state.bik = '';
        this.state.numAccount = '';
        this.state.nds = 'Без НДС';
        this.state.amount = '';
    };

    handleData = () => {

        const data = {
            name: this.state.name,
            bik: this.state.bik,
            numAccount: this.state.numAccount,
            nds: this.state.nds,
            amount: this.state.amount,
            tel_number: this.state.telNum,
            email: this.state.email
        };
        console.log(data);
        axios({
            method: 'post',
            url: 'http://localhost:5000/require-payment',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    };

    checkName(e){
        const inn = e.target.value;
        (inn.match(/^\d{10}$|^\d{12}$/)) ?
            this.setState({nameValid: true}, () => {this.validateForm()}) :
            this.setState({nameValid: false}, () => {this.validateForm()})
    }

    checkBIK(e) {
        (e.target.value.match(/^\d{9}$/)) ?
            this.setState({bikValid: true}, () => {this.validateForm()}) :
            this.setState({bikValid: false}, () => {this.validateForm()})
    }

    checkNumAccount(e) {
        (e.target.value.match(/^\d{20}$/)) ?
            this.setState({numAccountValid: true}, () => {this.validateForm()}) :
            this.setState({numAccountValid: false}, () => {this.validateForm()})
    }

    checkAmount(e){
        const sum = parseInt(e.target.value);
        (!isNaN(sum) && sum >= 1000 && sum <= 75000) ?
            this.setState({amountValid: true}, () => {this.validateForm()}) :
            this.setState({amountValid: false}, () => {this.validateForm()})
    }

    checkNumber(e) {
        (e.target.value.match(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/)) ?
            this.setState({numberValid: true}, () => {this.validateForm()}) :
            this.setState({numberValid: false}, () => {this.validateForm()})
    }

    // checkEmail(e){
    //     console.log(e.target.value);
    // }
    // checkEmail(e) {
    //     console.log(e.target.value);
    //     (e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) ?
    //         this.setState({emailValid: true},() => console.log('ok')) :
    //         this.setState({emailValid: false},() => this.validateForm());
    // }

    validateForm() {
        this.setState({
            formValid: this.state.amountValid && this.state.bikValid &&
                this.state.emailValid && this.state.nameValid
            && this.state.numAccountValid && this.state.numberValid
        });

        // console.log(this.state.nameValid);
        // console.log(this.state.bikValid);
        // console.log(this.state.numAccountValid);
        // console.log(this.state.amountValid);
        // console.log(this.state.emailValid);
        // console.log(this.state.numberValid);
    }

    render() {
        if (this.props.cleanStatus) {
            this.cleanForm()
        }
        return (
            <div className="data-input-ext">
                <span className='from-label payment-label'>От кого</span>
                <input type="text" placeholder="ИНН или название плательщика" className="from-input"
                       maxLength="12"
                       value={this.state.name}
                       onChange={
                           (e) => {
                               this.checkName(e);
                               this.setState({name: e.target.value});
                               this.props.cleaningCallback()
                           }}/>

                <span className="bik-label payment-label">БИК</span>
                <input type="text" className="bik-input"
                       maxLength="9"
                       value={this.state.bik} onChange={
                    (e) => {
                        this.checkBIK(e);
                        this.setState({bik: e.target.value});
                        this.props.cleaningCallback()
                    }}/>

                <span className="number-label payment-label">Номер счета</span>
                <div className="number-input-comp">
                    <input type="text" className="number-input"
                           maxLength="20"
                           value={this.state.numAccount} onChange={
                        (e) => {
                            this.checkNumAccount(e);
                            this.setState({numAccount: e.target.value});
                            this.props.cleaningCallback()
                        }}/>
                    <sub className="number-sub-label payment-label">Назначение платежа</sub>
                </div>

                <span className="nds-label payment-label">За что</span>
                <div className="nds">
                    <div className="nds-display" onChange={() => this.props.cleanCallback()}>
                        {this.state.nds}
                    </div>
                    <div className="nds-labels">
                        <label onClick={() => this.setState({nds: 'НДС 18%'})}>
                            <span className="eighteen-pers-nds-label">НДС 18%</span>
                        </label>
                        <label onClick={() => this.setState({nds: 'НДС 10%'})}>
                            <span className="ten-pers-nds-label">НДС 10%</span>
                        </label>
                        <label onClick={() => this.setState({nds: 'Без НДС'})}>
                            <span className="no-nds-label">Без НДС</span>
                        </label>
                    </div>
                </div>

                <span className="amount-label payment-label">Сколько</span>
                <input type="text" className="amount-input" ref="_amount"
                       maxLength="5"
                       value={this.state.amount}
                       onChange={(e) => {
                           this.checkAmount(e);
                           this.setState({amount: e.target.value});
                           this.props.cleaningCallback()
                       }
                       }/>
                <span className="tel-number-label">Номер телефона</span>
                <div className="tel-input-comp">
                    <InputMask placeholder="+7" className="tel-input" ref="_mobile" mask="+7 999 999-99-99"
                           onChange={(e) => {
                               this.checkNumber(e);
                               this.setState({telNum: e.target.value});
                               this.props.cleaningCallback()
                           }}/>
                    <sub className="tel-sub-label"> Оставляя телефон, вы соглашаетесь обратботку
                        персональных данных</sub>
                </div>
                <span className="email-label">Эл.почта</span>
                <input type="text" className="email-input" placeholder="Для уведомлений об оплате" ref="_email"
                       onChange={(e) => {
                           // this.checkEmail(e);
                           // validation failed
                           this.setState({email: e.target.value});
                           this.props.cleaningCallback();
                       }}/>
                <div className="form-button-require">
                    <button className="button-form-label" onClick={this.handleData}
                    disabled={!this.state.formValid}>Создать платеж
                    </button>
                </div>
            </div>
        );
    }
}

export default DataInput

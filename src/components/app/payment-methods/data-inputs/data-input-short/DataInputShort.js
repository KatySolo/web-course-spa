import React, {Component} from 'react';
import './DataInputShort.css'

class DataInputShort extends Component {
    constructor()
    {
        super();
        this.state = {
            name: '',
            nameValid: false,
            bik: '',
            bikValid: false,
            num_account: '',
            nds: 'Без НДС',
            amount: '',
            amountValid: false,
            formValid: false
        };

        this.submitData = this.submitData.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.checkName = this.checkName.bind(this);
        this.checkBIK = this.checkBIK.bind(this);
        this.checkAmount = this.checkAmount.bind(this);
    }
    clearForm() {
        this.state.name = '';
        this.state.bik = '';
        this.state.numAccount = '';
        this.state.nds = 'Без НДС';
        this.state.amount = '';
    }

    submitData() {
        this.props.handleData({
            name: this.state.name,
            bik: this.state.bik,
            numAccount: this.state.num_account,
            nds: this.state.nds,
            amount: this.state.amount
        });
    }

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

    checkAmount(e){
        const sum = parseInt(e.target.value);
        (!isNaN(sum) && sum >= 1000 && sum <= 75000) ?
            this.setState({amountValid: true}, () => {this.validateForm()}) :
            this.setState({amountValid: false}, () => {this.validateForm()})
    }

    validateForm(){
        this.setState({
            formValid: this.state.amountValid && this.state.bikValid && this.state.nameValid
        });
    }

    render() {
        if (this.props.cleanStatus) {
            this.clearForm();
        }
        return (
            <div>
                <div className="input-form">
                    <span className='from-label payment-label'>От кого</span>
                    <input type="text" placeholder="ИНН или название плательщика" className="from-input"
                           maxLength="12" value={this.state.name}
                           onChange={
                               (e) => {
                                   this.checkName(e);
                                   this.setState({name: e.target.value});
                                   this.props.cleaningCallback()
                               }}/>

                    <span className="bik-label payment-label">БИК</span>
                    <input type="text" className="bik-input" maxLength="9"
                           value={this.state.bik} onChange={
                        (e) => {
                            this.checkBIK(e);
                            this.setState({bik: e.target.value});
                            this.props.cleaningCallback()
                        }}/>

                    <span className="number-label payment-label">Номер счета</span>
                    <div className="number-input-comp">
                        <input type="text" className="number-input"
                               value={this.state.num_account} onChange={
                            (e) => {
                                this.setState({numAccount: e.target.value});
                                this.props.cleaningCallback()
                            }}/>
                        {/*todo check if its num of account*/}
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
                           maxLength="6"
                           value={this.state.amount}
                           onChange={(e) => {
                               this.checkAmount(e);
                               this.setState({amount: e.target.value});
                               this.props.cleaningCallback()
                           }
                           }/>
                </div>
                {/*<div className="form-button">*/}
                    <button className="button-form-label" onClick={this.submitData}
                            disabled={!this.state.formValid}> Получить файл для
                        интернет-банка </button>
                {/*</div>*/}
            </div>
        );
    }
}

export default DataInputShort

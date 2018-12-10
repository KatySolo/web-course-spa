import React, {Component} from 'react';
import './DataInputShort.css'

class DataInputShort extends Component {
    constructor()
    {
        super();
        this.state = {
            name: '',
            bik: '',
            num_account: '',
            nds: 'Без НДС',
            amount: ''
        };
    }
    clearForm() {
        console.log('Short is cleaning');
        this.state.name = '';
        this.state.bik = '';
        this.state.num_account = '';
        this.state.nds = 'Без НДС';
        this.state.amount = '';
        // do smth with it
    }

    render() {
        if (this.props.cleanStatus) {
            this.clearForm();
        }

        return (
            <div className="input-form">
                <span className='from-label payment-label'>От кого</span>
                <input type="text" placeholder="ИНН или название плательщика" className="from-input"
                       pattern="[0-9]{10,12}" value={this.state.name}
                       onChange={
                           (e) => {
                               this.setState({name: e.target.value});
                               this.props.cleanCallback();
                           }}/>
                <span className="bik-label payment-label">БИК</span>
                <input type="text" className="bik-input" pattern="[0-9]{9}"
                       value={this.state.bik} onChange={
                    (e) => {
                        this.setState({bik: e.target.value});
                        this.props.cleanCallback();
                    }
                }/>
                <span className="number-label payment-label">Номер счета</span>
                <div className="number-input-comp">
                    <input type="text" className="number-input"
                           value={this.state.num_account} onChange={
                        (e) => {
                            this.setState({num_account: e.target.value});
                            this.props.cleanCallback();
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
                       value={this.state.amount}
                       onChange={
                           (e) => {
                               this.setState({amount: e.target.value});
                               this.props.cleanCallback();
                           }}/>
            </div>
        );
    }
}

export default DataInputShort

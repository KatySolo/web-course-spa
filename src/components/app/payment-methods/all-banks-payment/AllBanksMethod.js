import React, { Component } from 'react';
import './AllBanksMethod.css'
import DataInputShort from '../data-inputs/data-input-short/DataInputShort'

class AllBanksMethod extends Component {
    constructor() {
        super();
        this.state = {needToClean: false};
    }

    makeFormDirty = () => {
        this.setState({needToClean: false});
    };

    render() {
        return (
            <div className="payment all-bank-card">
                <div className="window-title"> Сформируйте платежку и загрузите её в свой банк для подписи</div>
                <DataInputShort cleanStatus = {this.state.needToClean} cleanCallback = {this.makeFormDirty}/>
                <div className="form-button">
                    <span className="button-form-label">Получить фаил для интернет-банка
                    </span>
                </div>
                <div onClick={() =>
                {this.setState({needToClean: true}); console.log('clicked')}} className="clear-form">Очистить форму</div>
            </div>
        );
    }
}

export default AllBanksMethod

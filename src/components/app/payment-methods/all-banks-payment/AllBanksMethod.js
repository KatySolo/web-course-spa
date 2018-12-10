import React, { Component } from 'react';
import './AllBanksMethod.css'
import DataInputShort from '../data-inputs/data-input-short/DataInputShort'

class AllBanksMethod extends Component {
    constructor() {
        super();
        this.state = {
            needToClean: false,
            data: {}
        };
    }

    confirmClean = () => {
        this.setState({needToClean: false});
    };

    collectData = (value) => {
        this.props.handleData(value);
    };


    render() {
        return (
            <div className="payment all-bank-card">
                <div className="window-title"> Сформируйте платежку и загрузите её в свой банк для подписи</div>
                <DataInputShort handleData = {this.collectData} cleanStatus={this.state.needToClean} cleaningCallback = {this.confirmClean}/>
                <div className="clear-form" onClick={() => this.setState({needToClean: true})}>Очистить форму </div>
            </div>
        );
    }
}

export default AllBanksMethod

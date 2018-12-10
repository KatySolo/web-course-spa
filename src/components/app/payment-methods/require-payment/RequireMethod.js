import React, { Component } from 'react';
import './RequireMethod.css'
import DataInput from '../data-inputs/DataInput'

class RequireMethod extends Component {
    constructor() {
        super();
        this.state = {needToClean: false};
    }

    makeFormDirty = () => {
        this.setState({needToClean: false});
        // console.log("Dirty", this.state.needToClean);
    };
    render() {
        return (
            <div className="payment require">
                <div className="window-title"> Создайте платежку, а Индивидуальный предпрениматель Щвецова Мария
                    Валерьевна
                    подпишет ее у себя в интернет-банке
                </div>
                <DataInput cleanCallback = {this.makeFormDirty} cleanStatus = {this.state.needToClean} />
                <div className="form-button">
                    <span className="button-form-label">Создать платеж
                    </span>
                </div>
                <div onClick={() => this.setState({needToClean: true})} className="clear-form">Очистить форму</div>
            </div>
        );
    }
}
export default RequireMethod

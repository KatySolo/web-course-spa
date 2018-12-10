import React, { Component } from 'react';
import './RequireMethod.css'
import DataInput from '../data-inputs/DataInput'

class RequireMethod extends Component {
    constructor() {
        super();
        this.state = {
            needToClean: false,
            data: {}
        };
        this.handleData = this.handleData.bind(this);
    }

    makeFormDirty = () => {
        this.setState({needToClean: false});
    };

    handleData = (value) => {
        this.props.handleData(value);
    };

    render() {
        return (
            <div className="payment require">
                <div className="window-title"> Создайте платежку, а Индивидуальный предпрениматель Щвецова Мария
                    Валерьевна
                    подпишет ее у себя в интернет-банке
                </div>
                <DataInput cleaningCallback = {this.makeFormDirty} cleanStatus = {this.state.needToClean} handleData = {this.handleData}/>
                <div onClick={() => this.setState({needToClean: true})} className="clear-form">Очистить форму</div>
            </div>
        );
    }
}
export default RequireMethod

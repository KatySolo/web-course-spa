import React, { Component } from 'react';
import './RequireMethod.css'
import DataInput from '../data-inputs/DataInput'

class RequireMethod extends Component {
    render() {
        return (
            <div className="payment require">
                <div className="window-title"> Создайте платежку, а Индивидуальный предпрениматель Щвецова Мария
                    Валерьевна
                    подпишет ее у себя в интернет-банке
                </div>
                <DataInput/>
                <div className="form-button">
                    <span className="button-form-label">Создать платеж
                    </span>
                </div>
                <div className="clear-form">Очистить форму</div>
            </div>
        );
    }
}
export default RequireMethod

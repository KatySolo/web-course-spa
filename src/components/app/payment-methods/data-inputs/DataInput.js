import React, {Component} from 'react';
import './DataInput.css'
import DataInputShort from './data-input-short/DataInputShort'

class DataInput extends Component {
    render() {
        return (
            <div className="data-input-ext">
                <DataInputShort />
                <span className="tel-number-label">Номер телефона</span>
                <div className="tel-input-comp">
                    <input type="tel" placeholder="+7" className="tel-input"/>
                    <sub className="tel-sub-label"> Оставляя телефон, вы соглашаетесь обратботку
                        персональных данных</sub>
                </div>
                <span className="email-label">Эл.почта</span>
                <input type="text" className="email-input" placeholder="Для уведомлений об оплате"/>
            </div>
        );
    }
}

export default DataInput

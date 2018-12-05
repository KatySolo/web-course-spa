import React, {Component} from 'react';
import './DataInputShort.css'

class DataInputShort extends Component {
    render() {
        return (
            <div className="input-form">
                <span className='from-label payment-label'>От кого</span>
                <input type="text" placeholder="ИНН или название плательщика" className="from-input"
                       pattern="[0-9]{10,12}"/>
                <span className="bik-label payment-label">БИК</span>
                <input type="text" className="bik-input" pattern="[0-9]{9}"/>
                <span className="number-label payment-label">Номер счета</span>
                <div className="number-input-comp">
                    <input type="text" className="number-input"/>
                    <sub className="number-sub-label payment-label">Назначение платежа</sub>
                </div>
                <span className="nds-label payment-label">За что</span>
                <input type="radio" name="nds-value-radio" value="no" className="nds-value-radio" id="no-nds"
                       checked/>
                <input type="radio" name="nds-value-radio" value="ten-percent" className="nds-value-radio"
                       id="ten-percent-nds"/>
                <input type="radio" name="nds-value-radio" value="eighteen-percent"
                       className="nds-value-radio" id="eighteen-percent-nds"/>
                <div className="nds">
                    <div className="nds-display">
                        <span className="no-nds nds-value">без НДС</span>
                        <span className="ten-pers-nds nds-value">НДС 10%</span>
                        <span className="eighteen-pers-nds nds-value">НДС 18%</span>
                    </div>
                    <div className="nds-labels">
                        <label form="eighteen-percent-nds"><span
                            className="eighteen-pers-nds-label">НДС 18%</span></label>
                        <label form="ten-percent-nds"><span
                            className="ten-pers-nds-label">НДС 10%</span></label>
                        <label form="no-nds"><span className="no-nds-label">Без НДС</span></label>
                    </div>
                </div>
                <span className="amount-label payment-label">Сколько</span>
                <input type="text" className="amount-input"/>
            </div>
        );
    }
}

export default DataInputShort

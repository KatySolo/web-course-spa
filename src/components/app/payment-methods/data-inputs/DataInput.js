import React, {Component} from 'react';
import './DataInput.css'
import DataInputShort from './data-input-short/DataInputShort'

class DataInput extends Component {
    constructor() {
        super();
        this.state = {
            tel_num: "",
            email: "",
        };
    }

    cleanForm = () => {
        console.log("cleaning form");
        console.log("Our status ", this.props.cleanStatus);
        const {_mobile, _email} = this.refs;
        _mobile.value = "";
        _email.value = "";
    };

    render() {
        if (this.props.cleanStatus) {
            this.cleanForm()
        }
        return (
            <div className="data-input-ext">
                <DataInputShort cleanStatus = {this.props.cleanStatus} cleanCallback = {this.props.cleanCallback}/>
                <span className="tel-number-label">Номер телефона</span>
                <div className="tel-input-comp">
                    <input type="tel" placeholder="+7" className="tel-input" ref="_mobile"/>
                    <sub className="tel-sub-label"> Оставляя телефон, вы соглашаетесь обратботку
                        персональных данных</sub>
                </div>
                <span className="email-label">Эл.почта</span>
                <input type="text" className="email-input" placeholder="Для уведомлений об оплате" ref="_email"/>
            </div>
        );
    }
}

export default DataInput

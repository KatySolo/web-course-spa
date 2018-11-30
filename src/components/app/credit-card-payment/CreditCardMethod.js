import React, {Component} from 'react';
import CreditCardInput from './credit-card-input/CreditCardInput'
import CreditCard from './credit-card-template/CreditCard'
import './CreditCardMethod.css'

class CreditCardMethod extends Component {
    render() {
        return (
            <div className="cards">
                <CreditCard/>
                <CreditCardInput/>
            </div>
        );
    }
}

export default CreditCardMethod

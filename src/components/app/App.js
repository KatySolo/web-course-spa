import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import CreditCard from '../credit-card-template/CreditCard'
// import CreditCardInput from './credit-card-payment/credit-card-input/CreditCardInput'
import CreditCardMethod from './credit-card-payment/CreditCardMethod'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreditCardMethod/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ClientInfo from '../payer-credentials/PayerCredentials'
import PaymentsWin from '../payment-methods/PaymentWindow'
import CompanyInfo from '../company-info/CompanyInfo'



class User extends Component {
    render() {
        return (
                <div>
                    <ClientInfo/>
                    <PaymentsWin/>
                    <CompanyInfo/>
                </div>
        );
    }
}

export default User;

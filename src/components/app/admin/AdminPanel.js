import React, { Component } from 'react'
import './AdminPanel.css'
import CardPaymentAdmin from './card_payment_admin/CardPaymentAdmin'
import ReqiurePaymentAdmin from './require_payment_admin/RequirePaymentAdmin'
import {Switch, Route, NavLink} from "react-router-dom";

class AdminPanel extends Component{

    render() {
        return(
            <div className="admin-container">
                <div className='admin-nav'>
                <span className="nav-span"><NavLink to='/admin/card_payment'>Card Payment</NavLink></span>
                <span className='nav-span'><NavLink to='/admin/require_payment'>Require Payment</NavLink></span>
                </div>
               <Switch>
                <Route path='/admin/card_payment' component={CardPaymentAdmin} />
                <Route path='/admin/require_payment' component={ReqiurePaymentAdmin}/>
               </Switch>
            </div>
        );
    }
}

export default AdminPanel

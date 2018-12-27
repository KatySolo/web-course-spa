import React, { Component } from 'react'
import './AdminPanel.css'
import CardPaymentAdmin from './card_payment_admin/CardPaymentAdmin'
import ReqiurePaymentAdmin from './require_payment_admin/RequirePaymentAdmin'
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import isAuthenticated from '../../../auth/isAuthenticated';

class AdminPanel extends Component{
    constructor() {
        super();
        this.state = {
            isLoggedOut: false
        };

        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.setState({isLoggedOut: true},() => {});
    }

    render() {
        const isAuth = isAuthenticated();
        return(
            <div className="admin-container">
                {isAuth ? (
                    <div className='admin-nav'>
                        <span className="nav-span"><NavLink to='/admin/card_payment'>Card Payment</NavLink></span>
                        <span className='nav-span'><NavLink to='/admin/require_payment'>Require Payment</NavLink></span>
                        <button className='nav-logout' onClick={this.logout}>Logout</button>
                        {this.state.isLoggedOut ?
                            (<Redirect to={{
                            pathname: '/login',
                            state: { from: this.props.location }
                            }} />)
                            : (<span />)
                        }
                    </div>)
                    : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: this.props.location }
                        }} />
                    )}
                {isAuth ? (
                    <Switch>
                        <Route path='/admin/card_payment' component={CardPaymentAdmin}/>
                        <Route path='/admin/require_payment' component={ReqiurePaymentAdmin}/>
                    </Switch>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: this.props.location }
                    }} />
                )}

            </div>
        );
    }
}

export default AdminPanel

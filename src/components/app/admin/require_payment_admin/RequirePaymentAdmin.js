import React, { Component } from 'react'
import axios from "axios";

class RequirePaymentAdmin extends Component{
    constructor()
    {
        super();
        this.state = {
            cardPayments: [],
            requiredPayments: [],
            sort: 'acs',
            field: 'no',
            filter: ''
        };
        this.getRequiredPayments = this.getRequiredPayments.bind(this);
        this.setFiledSorting = this.setFiledSorting.bind(this);
        this.setFilteringWords = this.setFilteringWords.bind(this);
    }

    getRequiredPayments() {
        axios.get("http://localhost:5000/require-payment", {
            params: {
                sort: this.state.sort,
                field: this.state.field,
                filter: this.state.filter
            }
        })
            .then(res => {
                console.log(res);
                this.setState({requiredPayments: res.data}, ()=>{console.log(this.state.requiredPayments)})
            })
            .catch(er => console.log(er))
    }

    setFiledSorting(e) {
        this.setState({
            field: e.target.value
        }, () => console.log(this.state.field));
    }

    setFilteringWords(e) {
        this.setState({
            filter: e.target.value
        });
    }
    render() {
        return (
            <div className="admin-panel">
                <div>
                <lable>
                    <input type="radio" name="sort_option" value="decs"
                              checked={this.state.sort === 'decs'}
                              onClick={() => this.setState({sort: 'decs'})}/>
                    DECS
                </lable>

                <label><input type="radio" name="sort_option" value="acs"
                              checked={this.state.sort === 'acs'}
                              onClick={() => this.setState({sort: 'acs'})}/>
                    ACS
                </label>
                </div>
                <div>
                <span>Choose sorting field</span>
                <select value={this.state.field} onChange={this.setFiledSorting}>
                    <option value="no">No</option>
                    <option value="card_num">Card Number</option>
                    <option value="amount">Amount</option>
                    <option value="comments">Comments</option>
                    <option value="cvc">CVC</option>
                    <option value="email">Email</option>
                    <option value="expire_date">Expire Date</option>
                </select>
                </div>
                <div>
                <span>Enter filtering word</span>
                <input type="text" onChange={this.setFilteringWords} value={this.state.filter}/>
                </div>
                <button onClick={this.getRequiredPayments}>Получить все запрошенные платежи</button>
                {(this.state.requiredPayments.length) ?
                    <table className="resultTable">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>BIK</td>
                            <td>Bank Number</td>
                            <td>NDS</td>
                            <td>Amount</td>
                            <td>Number</td>
                            <td>Email</td>
                        </tr>
                        {this.state.requiredPayments.map((i) =>
                            <tr>
                                {Object.keys(i).map((j) =>
                                    <td>{i[j]}</td>
                                )}
                            </tr>
                        )}
                        </tbody>
                    </table>
                    : ""
                }
            </div>
        );
    }

}

export default RequirePaymentAdmin

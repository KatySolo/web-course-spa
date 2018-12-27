import React, { Component } from 'react'
import axios from "axios";

class RequirePaymentAdmin extends Component{
    constructor()
    {
        super();
        this.state = {
            cardPayments: [],
            requiredPayments: [],
            sort: 'asc',
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
                this.setState({requiredPayments: res.data}, ()=>{})
            })
            .catch(er => console.log(er))
    }

    setFiledSorting(e) {
        this.setState({
            field: e.target.value
        }, () => {});
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
                    <input type="radio" name="sort_option" value="desc"
                              checked={this.state.sort === 'desc'}
                              onClick={() => this.setState({sort: 'desc'})}/>
                    DESC
                </lable>

                <label><input type="radio" name="sort_option" value="asc"
                              checked={this.state.sort === 'asc'}
                              onClick={() => this.setState({sort: 'asc'})}/>
                    ASC
                </label>
                </div>
                <div>
                <span>Choose sorting field</span>
                <select value={this.state.field} onChange={this.setFiledSorting}>
                    <option value="no">No</option>
                    <option value="name">Name</option>
                    <option value="bik">BIK</option>
                    <option value="account_num">Account Number</option>
                    <option value="nds">NDS</option>
                    <option value="amount">Amount</option>
                    <option value="tel_number">Number</option>
                    <option value="email">Email</option>
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
                            <td>No.</td>
                            <td>Name</td>
                            <td>BIK</td>
                            <td>Account Number</td>
                            <td>NDS</td>
                            <td>Amount</td>
                            <td>Number</td>
                            <td>Email</td>
                        </tr>
                        {this.state.requiredPayments.map((i) =>
                            <tr>
                                <td>{i[Object.keys(i)[4]]}</td>
                                <td>{i[Object.keys(i)[5]]}</td>
                                <td>{i[Object.keys(i)[2]]}</td>
                                <td>{i[Object.keys(i)[0]]}</td>
                                <td>{i[Object.keys(i)[6]]}</td>
                                <td>{i[Object.keys(i)[1]]}</td>
                                <td>{i[Object.keys(i)[7]]}</td>
                                <td>{i[Object.keys(i)[3]]}</td>
                                {/*{Object.keys(i).map((j) =>*/}
                                    {/*<td>{i[j]}</td>*/}
                                {/*)}*/}
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

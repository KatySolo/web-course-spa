import React, {Component} from 'react'
import axios from "axios";
import './CardPaymentAdmin.css'

class CardPaymentAdmin extends Component {

    constructor()
    {
        super();
        this.state = {
            cardPayments: [],
            sort: 'asc',
            field: 'no',
            filter: ''
        };
        this.getCardPayments = this.getCardPayments.bind(this);
        this.setFiledSorting = this.setFiledSorting.bind(this);
        this.setFilteringWords = this.setFilteringWords.bind(this);
        this.sendPatch = this.sendPatch.bind(this);
    }

    getCardPayments() {
        axios.get("http://localhost:5000/card-payment", {
            params: {
                sort: this.state.sort,
                field: this.state.field,
                filter: (this.state.filter) ? this.state.filter : ''
            }
        })
            .then(res => this.setState({cardPayments: res.data}, ()=>{}))
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

    sendPatch(e, index) {

        axios.patch("http://localhost:5000/card-payment", {
            changes: index
        })
            .then(() => {this.getCardPayments()})
            .catch((err) => {console.log(err)});
    }

    render(){
        return(
            <div className="admin-panel">
                <div>
                <lable>
                    <input type="radio" name="sort_option" value="desc"
                              checked={this.state.sort === 'desc'}
                              onClick={() => this.setState({sort: 'desc'})}/>
                    DESC
                </lable>

                <label>
                    <input type="radio" name="sort_option" value="asc"
                              checked={this.state.sort === 'asc'}
                              onClick={() => this.setState({sort: 'asc'})}/>
                    ASC
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
                <button onClick={this.getCardPayments}>Получить все платежи по картам</button>
                {(this.state.cardPayments.length) ?
                    <table className="resultTable">
                        <tbody>
                        <tr>
                            <td>No.</td>
                            <td>Amount</td>
                            <td>Card Number</td>
                            <td>Expire Date</td>
                            <td>CVC</td>
                            <td>Comments</td>
                            <td>Email</td>
                            <td>Trust</td>
                        </tr>
                        {this.state.cardPayments.map((i, index) =>
                            <tr className={(this.state.cardPayments[index].notSafe !== 0) ? "not-safe" : "safe"}>
                                <td>{i[Object.keys(i)[6]]}</td>
                                <td>{i[Object.keys(i)[0]]}</td>
                                <td>{i[Object.keys(i)[1]]}</td>
                                <td>{i[Object.keys(i)[5]]}</td>
                                <td>{i[Object.keys(i)[3]]}</td>
                                <td>{i[Object.keys(i)[2]]}</td>
                                <td>{i[Object.keys(i)[4]]}</td>
                                <td>{(i[Object.keys(i)[7]] === 0) ? 'Yes' : 'No'}</td>

                                {/*todo check where order mutation is*/}

                                <td><button onClick={(e) => this.sendPatch(e, i[Object.keys(i)[6]])}>
                                    {(i[Object.keys(i)[7]] === 0) ? 'Очень плохой платеж' : 'Отмена'}
                                </button></td>
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

export default CardPaymentAdmin

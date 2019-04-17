import React from 'react';
import {withRouter} from 'react-router-dom';

const returnUrl = 'https://www.basic.am/';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'hy',
            description: '',
            amount: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.amountChange = this.amountChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        let orderNumber = new Date().toLocaleTimeString()
        fetch(`https://cors.io/?https://ipay.arca.am/payment/rest/register.do?userName=27533072_api&password=Basic@659988&returnUrl=${returnUrl}&amount=${this.state.amount}00&currency=051&language=${this.state.language}&description=${this.state.description}&orderNumber=${orderNumber}`)
            .then(res => res.json())
            .then((out) => {
                window.location.href = out.formUrl
            }).catch(err => console.error(err));
        document.cookie = `cookie_amount="+ ${this.state.amount} +"; path=/`;
        document.cookie = `cookie_description="+ ${this.state.description} +"; path=/`;
    }
    descriptionChange(event) {
        event.preventDefault();
        this.setState({description: event.target.value})
    }

    amountChange(event) {
        event.preventDefault();
        this.setState({amount: event.target.value});

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label id="description">
                    <input type="text" name="description"  maxLength="6" value={this.state.description} onChange={this.descriptionChange} required/><span>Վճարման հաշիվ</span>
                </label>
                <label id="amount">
                    <input type="text" name="amount" maxLength="6" value={this.state.amount}  onChange={this.amountChange} required/><span>Գումար</span><span id="currency">դրամ</span>
                </label>
                <input id="submit" type="submit" value="Կատարել վճարում" onClick={this.handleChange}/>
            </form>
        )
    }
}
export default withRouter(Payment)
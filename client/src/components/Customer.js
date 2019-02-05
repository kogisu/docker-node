import React, { Component } from 'react';
import './Customer.css';

class Customer extends Component {
  constructor(props) {
    super();
    this.state = {
      customer: null
    }
  }
  async componentDidMount() {
    const customers = await fetch('/api/customer', {
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    });
    // console.log('customers: ', customers);
    if (customers.ok) {
      const body = await customers.json();
      this.setState({customer: body}, () => {
        console.log('customers fetched: ', body);
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
          {this.state.customer}
      </div>
    );
  }
}

export default Customer;

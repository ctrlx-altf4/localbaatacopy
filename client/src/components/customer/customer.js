import React, {Component} from 'react';

import './customer.css';

class Customer extends Component{
     constructor(){
         super();
         this.state = {
             customers: []
         }
     }
     componentDidMount(){
         fetch('/api/customer')
         .then(res=>res.json())
         .then(customers =>this.setState({customers: customers}, ()=>{console.log("fetched", customers)}));
     }
    render(){
        return (
            <div>
                <h1>customer</h1>
                <ul>
                    {this.state.customers.map(customer =>
                        <li key = {customer.id}>{customer.firstName}</li>)}
                </ul>
            </div>
          );
    }
 
}

export default Customer;

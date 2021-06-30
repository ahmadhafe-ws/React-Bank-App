import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

export class Operations extends Component{
    constructor() {
        super();
        this.state = {
          amount: "",
          vendor: "",
          category: "",
        };
      }
    
      updateInputs = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    
      createTransaction = async (event) => {
        let multi
        if(event.target.name === "deposit") multi = 1
        else multi = -1

        await axios.post("http://localhost:4000/transaction",
          {
              amount: this.state.amount * multi,
              category: this.state.category,
              vendor: this.state.vendor,
          })
          .then(() => {
            this.setState({
              amount: 0,
              vendor: "",
              category: "",
            });
          });
      };
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.updateInputs}></input>
                    <input type="text" name="vendor" placeholder="Vendor" value={this.state.vendor} onChange={this.updateInputs}></input>
                    <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.updateInputs}></input>

                    <Link to="/" className="opLink" name="withdraw" onClick={this.createTransaction}>Withdraw</Link>
                    <Link to="/" className="opLink" name="deposit" onClick={this.createTransaction}>Deposit</Link>
                </form> 
            </div>
        )
    }
}
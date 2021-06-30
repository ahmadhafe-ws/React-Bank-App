import React, {Component} from 'react';
import axios from 'axios';

export class Transaction extends Component{
    constructor(){
        super()
        this.state = {
            id : null
        }
    }
    componentDidMount= () =>{
        this.setState({id : this.props.trans._id})
    }
    deleteTransaction = () => {
        let id = this.state.id
        axios.delete(`http://localhost:4000/transaction/${id}`).then(res => {
            console.log(res);
        })
    }
    render(){
        return(
            <div>
                <h1>Amount : {this.props.trans.amount}</h1>
                <h1>Category : {this.props.trans.category}</h1>
                <h1>Vendor : {this.props.trans.vendor}</h1>
                <button onClick={this.deleteTransaction}>Delete</button>
                <br></br>
            </div>
        )
    }
}
import React, {Component} from 'react';
import {Transaction} from './Transaction'

export class Transactions extends Component{
    render(){
        return(
            <div>
                {this.props.transactions.map(trans => <Transaction key={trans._id} trans={trans}/>)}
            </div>
        )
    }
}
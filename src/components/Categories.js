import React, {Component} from 'react';
import axios from 'axios';

export class Categories extends Component{
    constructor(){
        super()
        this.state= {
            categories : []
        }
    }
    componentDidMount = () => {
        this.getCategories()
    }
    getCategories = () => {
        axios.get('http://localhost:4000/transactions/categories').then(res =>{
            this.setState({categories : res.data})
         }).catch(function (error) {
           console.log(error);
         })
    }
    render(){
        return(
            <div>
                {this.state.categories.map(cat => {
                    return(
                    <div key={cat._id}>
                    <h1>Category : {cat._id}</h1>
                    <h1>Total : {cat.total}</h1>
                    <br></br>
                    </div>
                    )
                })}
            </div>
        )
    }
}
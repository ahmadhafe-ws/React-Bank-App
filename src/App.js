import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Transactions } from './components/Transactions';
import { Operations } from './components/Operations';
import { Categories } from './components/Categories';

class App extends Component{
  constructor(){
    super()
    this.state = {
      transactions : [],
      balance : 10000
    }
  }
   componentDidMount() {
  axios.get('http://localhost:4000/transactions')
  .then(res =>{
     this.setState({transactions : res.data})
  }).catch(function (error) {
    console.log(error);
  })
}
  render(){
  return (
    <Router>
      <div>
      <Link className="link" to="/" >Home</Link>
      <Link className="link" to="/operations" >Operations</Link>
      <Link className="link" to="/categories" >Categories</Link>

      <Route exact path="/operations" render={() => <Operations />}/>
      <Route exact path="/" render={() => <Transactions transactions={this.state.transactions}/>}/>
      <Route exact path="/categories" render={() => <Categories />}/>
      </div>
    </Router>
  )
  }
}

export default App;
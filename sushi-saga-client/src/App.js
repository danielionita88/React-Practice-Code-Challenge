import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state={
      page: 0,
      sushis:[],
      amount: 100,
      eaten: []
    }
  }

  handleMoreBtn=()=>{
    this.setState({
      page: this.state.page + 1
    })
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        sushis: data
      })}
    )
  }

  handleEaten = (sushi)=>{
    const newMoney = this.state.amount - sushi.price
    if(newMoney >= 0 && !this.state.eaten.includes(sushi)){
      this.setState({
        amount: newMoney,
        eaten: [...this.state.eaten, sushi]
      })
    }
  }


  render() {
    const sushis=this.state.sushis
    return (
      <div className="app">
        <SushiContainer sushis={sushis.slice(4*this.state.page, (4*this.state.page)+4)} 
        handleMoreBtn={this.handleMoreBtn}
        handleEaten={this.handleEaten}
        eaten={this.state.eaten}/>
        <Table eaten={this.state.eaten} amount={this.state.amount} />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { observer } from 'mobx-react'


@observer
class Market extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            quantity: 1
        }
    }
   
      checkEnter = e => {
          if(e.key === 'Enter'){
            this.props.store.addItem(this.state.name, this.state.price, this.state.quantity)
            this.setState({
                name: '',
                price: 0,
                quantity: 1
            })
        }
      }
      
      handleInput = e => {
            const newItem = {...this.state}
            newItem[e.target.name] = e.target.value
            this.setState({
                name: newItem.name,
                price: newItem.price,
                quantity: newItem.quantity
            })

      }

    render() {
        return (<div onKeyDown={this.checkEnter}>
            <input name='name' onChange={this.handleInput} value={this.state.name}/>
            <input name='price' onChange={this.handleInput} value={this.state.price}/>
            <input name='quantity' onChange={this.handleInput} value={this.state.quantity}/>
      </div>)
    }
}

export default Market;
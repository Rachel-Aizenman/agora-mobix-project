import React, { Component } from 'react';

import { observer } from 'mobx-react'


@observer
class Item extends Component {
        callBuyItem = e => {
            this.props.store.buyItem(e.target.name)
        }
        callPriceChange = e => {
            const name = e.target.getAttribute('name')
            const newPrice =  prompt('what would you like to change the price to?')
        this.props.store.changePrice(name, newPrice)
        }

    render() {
  
        return (<div>
            {this.props.store.items.map((i, indx) => <div onDoubleClick={this.callPriceChange} key={indx}> <li name={i.name}>  {i.name} is available for ${i.price}.00. We have {i.quantity} in stock.</li>  <button name={i.name} onClick={this.callBuyItem}>Buy</button></div>)}
          
            </div>)
    }
}

export default Item
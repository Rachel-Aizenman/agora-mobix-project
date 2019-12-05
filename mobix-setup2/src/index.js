import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Inventory } from './stores/Inventory';
import { Item } from './stores/Item'


let food = new Item("food", 9, 5)
let inventoryList = new Inventory()
inventoryList.items.push(food)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<App store={inventoryList} />, document.getElementById('root'));
serviceWorker.unregister();

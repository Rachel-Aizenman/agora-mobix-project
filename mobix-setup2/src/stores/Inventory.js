import { observable, action } from 'mobx'
// import Item from '../components/Item';
import { Item } from './Item'


export class Inventory {
    // your code here
   @observable items = [];

   @action addItem = (name, price = 0, quantity = 1) => {
       if(this.items.find(i => i.name === name)){
            const item = this.items.find(i => i.name === name)
            item.quantity++
       } else {

            let item = new Item(name, price, quantity)
            this.items.push(item)
       }
   }
   @action buyItem = name => {
       const item = this.items.find(i => i.name === name)
               console.log(item.quantity)

       if(item.quantity == 0){
           const index = this.items.findIndex(i => i === item)
           this.array.splice(index, 1)
       } else {
        item.quantity = item.quantity - 1 
       }
   }
   @action changePrice = (name, price) => {
    const item = this.items.find(i => i.name === name)
    item.price = price
   }

}

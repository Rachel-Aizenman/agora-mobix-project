import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Item from './components/Item'
import Market from './components/Market'


@observer
class App extends Component {
  render() {
  return (
    <div >
      <Item store={this.props.store}/>
      <Market store={this.props.store}/>
    </div>
  );
}
}
  
  
  

export default App;

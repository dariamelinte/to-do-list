import React, { Component } from 'react';
import './App.css';
import Aux from '../hoc/Auxiliary';
import Header from '../components/header/Header';
import ToDoList from '../components/toDoList/ToDoList';
import Items from '../components/items/Items';

class App extends Component  {

  state = {
    item : ''
  }

 changeTheText = (event) => {
   this.setState({item: event.target.value});
 }

  render () {
      return (
      <Aux>
        <Header />
        <ToDoList
          changed = {this.changeTheText}/>   
        <Items 
          value = {this.state.item}
        /> 
      </Aux>
    );
  } 
}

export default App;

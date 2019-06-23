import React, { Component } from 'react';
import './App.css';
import Aux from '../hoc/Auxiliary';
import Header from '../components/header/Header';
import ToDoList from '../components/toDoList/ToDoList';
import Items from '../components/items/Items';

class App extends Component  {

  state = {
    item : '',
    list : []
  }

 changeTextHandler = (event) => {
   this.setState({item: event.target.value});
 }

 addItemToList = () => {
  const newItem = this.state.item;
  const newList = [...this.state.list, newItem];
  this.setState({list : newList});
  this.setState({item : ''});
  console.log(this.state.list);
 }


  render () {
      return (
      <Aux>
        <Header />
        <ToDoList
          changed = {this.changeTextHandler}
          clicked = {this.addItemToList}/>   
        <Items 
          value = {this.state.item}
        /> 
      </Aux>
    );
  } 
}

export default App;

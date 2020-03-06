// import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddBar from './componants/AddBar'
import React, { Component } from 'react'
import ListItem from './componants/listItem'

class App extends Component {
  render() {
    return (
      <div>
        <AddBar/>  
        < ListItem/>  
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Practice from './component/Practice';

class App extends Component {
  render() {
    return (
      <div>
        <Form />   
        <Practice />
      </div>      
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Childcard from './Childcard'

class Refs extends Component {
	constructor(props){
		super(props);
		this.state = {firstname:"",lastname:""}
	}

	add = () =>{
		console.log('This is addiing')	
		const subHead1 = this.refs.firstName.value;
		const subHead2 = this.refs.lastName.value;
		this.setState({firstname:subHead1,lastname:subHead2});

	}


	  render(){

	    return (
	       	<div className="shiftingForm">
	       		FirstName: <input type="text" ref="firstName"></input><br/>
	       		LastName: <input type="text" ref="lastName"></input><br/>
	       		
	       		<button onClick={this.add}>Show Card</button> <br/>
	       		<h1>{this.state.value1}</h1> <br/>
	       		<h1>{this.state.value2}</h1> <br/>

	       	</div>   	
	    );
	  }
	}

export default Refs;

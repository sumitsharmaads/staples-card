import React, { Component } from 'react';
import './App.css';
import Childcard from './Childcard'

class Form extends Component {
	constructor(props){
		super(props);
		this.state = {products:
			[{main:"Office Supplies",subHead1:"Writing Supplies",subHead2:"calenders and Planners",
			subHead3:"office basis", path:"https://assets.staples-static.com/sbd/cre/products/home-banners/popularcategory/images/dg17721_finalofficesupplies_380x229.png"
		}]
		}
	}



	add = () =>{
		console.log('This is addiing')
		const main = this.refs.main.value;		
		const subHead1 = this.refs.subHead1.value;
		const subHead2 = this.refs.subHead2.value;
		const subHead3 = this.refs.subHead3.value;
		const path = this.refs.path.value;
		const tempProduct = this.state.products;
		tempProduct.push({main, subHead1, subHead2, subHead3, path });
		this.setState({products:tempProduct});

	}

	deleteCard = (passing) =>{
		const tempProduct = this.state.products;
		delete tempProduct[passing];
		this.setState({products:tempProduct});
	}

	  render(){
	    return (
	      <div className="Form">
	       	<div className="shiftingForm">
	       		imagePath: <input type="text" ref="path"></input><br/>
	       		Main Heading: <input type="text" ref="main"></input><br/>
	       		Sub Heading 1: <input type="text" ref="subHead1"></input><br/>
	       		Sub Heading 2: <input type="text" ref="subHead2"></input><br/>
	       		Sub Heading 3: <input type="text" ref="subHead3"></input><br/>
	       		
	       		<button onClick={this.add}>Add Card</button>
	       	</div>
	       	<hr/>
	      
		      	{this.state.products? this.state.products.map((abc,passing) =>(
		       	<Childcard path={abc.path} main={abc.main} subHead1={abc.subHead1}
		       	 subHead2={abc.subHead2}
		       	subHead3={abc.subHead3} deleteCard={this.deleteCard} passing={passing}/>
		       		)):''}
			</div>     	
	    );
	  }
	}

export default Form;

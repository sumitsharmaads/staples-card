import React, {Component} from 'react';
import './test.css'

const Practice = () => {
	return(
		<div className = "Practice">
			<h1> Welcome to practice </h1>
			<div className="Navigation">
				<ul>
					<li><a href="#">My Account</a></li>
					<li><a href="#">More Infos</a></li>
				</ul>
			</div>
			<div className = "Change">
				<h2 className ="Head_shift">My first heading</h2>
				<p>This is a paragraph, Above is navigation part. Down part is for border
				 div. Here i used an image as  background. </p>
			</div>
			<div className="Border">
				<h2 className="Border_tag">This is Border tag</h2>
				<p className="Border_Par"> This is shifting in border</p>
			</div>
			<div> 
			<p className="Box">This is a border box</p>
			</div>
			<div className="Outline_offset">
			<p className="Outline">This is Outline with offset propety</p>
			</div>
			<div className="justify">
				In my younger and more vulnerable years my father gave me some advice
				that I've been turning over in my mind ever since. 'Whenever you 
				feel like criticizing anyone,' he told me, 'just remember that 
				all the people in this world haven't had the advantages that you've 
				had.
			</div>
			<div className="Shadow">
				<h3>This is text part</h3>
				<p>
					I joined ADS in Aug 2018, Everyone have all expectation in mind. But 
					sometimes i think it's good to be silent observe that you see but be 
					a person speak where you have to say to speak upto that time be silent
					because our pious book Gita as well give such a beautiful lesson if Yudhistir
					will not went on the Cards play game without invitation and be silent there, noone
					asked him his advice, but he spoke there and lost his kingdom and lots of things.
				</p> 
			</div>
			<div>
				<h1 className="Times_new">This is times new roman</h1>
				<h1 className="San">This is San serif</h1>
			</div>
			<div className="Icon">
				<i className="fa fa-facebook"></i>
				<i className="fa fa-linkedin"></i>
				<i className="fa fa-twitter"></i>
				<i className="fa fa-android"></i>
				<i className="fa fa-refresh"></i>
			</div>
			<div className="Link">
			<a href="#">This is a link</a><br/>
			<button>Click me</button>
			</div>
			<div>
				<h2>List item is inside</h2>
				<ul className="lista">
					<li>Coffee</li>
					<li>tea</li>
					<li>colddrink</li>
				</ul>
				<h2>List item is outside</h2>
				<ul className="listb">
					<li>Coffee</li>
					<li>tea</li>
					<li>colddrink</li>
				</ul>
			</div>
			<div className="Tabular">
				<h3>Table is given below</h3>
				<table>
					<tr>
						<th>Product Name</th>
						<th>Quantity</th>
						<th>Specification</th>
						<th>Delivery Date</th>
					</tr>
					<tr>
						<td>Clipper</td>
						<td>100</td>
						<td>To clip unwanted portion in AC</td>
						<td>Nov.16th</td>
					</tr>
				</table>
			</div>
			<div>
				<h3 className="Change_value">How we can use display property</h3>
				<div>
					<p className="Visible_element">this is visible part but  on hover it's doesn't visible and occupy
					it's place as well, means we are using visiblity property.
					</p>
					<span>
					<p className="Notvisible_element">this is visible part but  on hover it's doesn't visible and don't occupy it's place,
					 means we are using display none property.
					</p>
					</span>
				</div>
				<div>
					<h3>Why we use max. width we can understand this concept by minimizig windowsize
					upto 500px. </h3>
					<div className="ex1">This div element has width: 500px;</div>
					<br/>
					<div className="ex2">This div element has max-width: 500px;</div>
				</div>
			</div>
			<div>
				<h3>How we can use position proprty i.e. static, fixed, relative, absolute, sticky</h3>
				<h4> satatic: it's take it's value as default means as per default value of page and shift accordingly</h4>
				<div className="Static">
					This div element has position: static;
				</div>
				<h4> fixed: it's take it's value as default means as per default value and have it's postion fixed at one place</h4>
				<div className="Fixed">
					This div element has position: fixed;
				</div>
				<h3>Relative, Absolute</h3>
				<div className="Relative">This div element has position: relative;
  					<div className="Absolute">This div element has position: absolute;</div>
				</div>
			</div>
			<div>
				<h3>This div element has overflow property, three types mainly hidden, visible, none, scroll</h3>
				<div className="Overflow">
					You can use the overflow property when you want to have better control of the layout. The 
					overflow property specifies what happens if content overflows an element's box.
				</div>
			</div>
		</div>
	);
}

export default Practice;
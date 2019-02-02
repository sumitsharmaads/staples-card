import React, { Component } from 'react';

const Childcard = ({path, main, subHead1, subHead2, subHead3,deleteCard, passing}) => {
    return (
      <div className="Childcard">
          <div className="Gallery">
              <button onClick={() => deleteCard(passing)}>Remove</button>
              <a target="_blank" href="#">
              <img src={path} alt="Office Supplies" width="600" height="400" />             </a>
              <div class="Desc">
                <a href=""><h3>{main}</h3></a><br/><br/>
                <a href=""><p className="DescText">{subHead1}</p></a>
                <a href=""><p className="DescText">{subHead2}</p></a>
                <a href=""><p className="DescText">{subHead3}</p></a>
              </div>
          </div>
      </div>
    );
  }


export default Childcard;
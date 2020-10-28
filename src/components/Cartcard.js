import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Cartcard extends Component {
    render() {
        return (
            <div>
            <div className="card" style={{width: "5rem"},{marginLeft:"10%"}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-body">
              <button className="btn btn-outline-success my-2 my-sm-0" style={{marginRight: '25px'}}>
              <i className="fas fa-heart"> Remove</i>
              </button>
              <button className="btn btn-outline-success my-2 my-sm-0" >
             <i className="fas fa-shopping-cart">Add to Cart</i> 
              </button>
            </div>
          </div>
            </div>
        )
    }
}



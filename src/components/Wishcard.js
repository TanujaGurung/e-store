import React, { Component } from 'react'

export default class Wishcard extends Component {
    render() {
        return (
            <div>
            <div className="card" style={{width: "5rem"},{marginLeft:"10%"}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <button className="btn btn-outline-success my-2 my-sm-0" style={{marginRight: '25px'}}>
              <i class="fas fa-times"> Remove</i>
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

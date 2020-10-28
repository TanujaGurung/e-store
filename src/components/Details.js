import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const Details =(props) =>
     { let product= props.location.state;
        return (
            <div style = {{marginLeft:'350px'}}>
            <div className="card" style={{width: "25rem"}}>
            <img src={product.url} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <h6> <i class="fas fa-rupee-sign"></i> {product.price}</h6>
              <p class="card-text">{product.description}</p>
              
            </div>
        
            <div class="card-body">
              <button className="btn btn-outline-success my-2 my-sm-0" style={{marginRight: '25px'}}>
              <i className="fas fa-heart"> Add to Wishlist</i>
              </button>
              <button className="btn btn-outline-success my-2 my-sm-0" >
             <i className="fas fa-shopping-cart">Add to Cart</i> 
              </button>
            </div>
          </div>
            </div>
        )
    }
export default Details;

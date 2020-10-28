import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Product from './Product';
import { ProductsList } from './Productlist';

const Card =(props) =>{


        return (
            <div>
            <div class="card" style={{width: "25rem"}}>
            <img class="card-img-top" src={props.url} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title"> {props.title} </h5>
              <h6> <i class="fas fa-rupee-sign"></i> {props.price}</h6>
              
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link
              to={{
                pathname: "/details/" + props.id,
                state: {
                  title: props.title,
                  description: props.description,
                  price: props.price,
                  url: props.url
                }
              }}
            >
              View Details
            </Link></button>
              </div>
          </div>
          <br></br>
            </div>
        )
    
    }
export default Card;


import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import Sidebar from './Sidebar';

export default class Navbar extends Component {
    render() {
        return (
     <div className="mx-auto" >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button ><i class="fas fa-bars"></i></button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="nav nav-tabs ml-25rem" >
    
      <li style={{marginLeft: '10px'}}>
      <Link to = '/'>
      <img src={logo} width="80" height="35" alt="" loading="lazy" />
    </Link>    
      </li>
     <li style={{marginLeft: '100px'}}>
     <form className="form-inline my-2 my-lg-0">
     <input className="form-control mr-sm-2" type="search" style={{width: '550px'}} placeholder="Search" aria-label="Search" />
     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
   </form>
     </li>
     <li style={{marginLeft: '100px'}}>
     <Link  to = "/wishlist" >
     <button className="btn btn-outline-success my-2 my-sm-0" >
     <i className="fas fa-heart"> Wishlist</i>
     </button>
     </Link>
      </li>
      <li style={{marginLeft: '20px'}}>
     <Link  to = "/cart" >
     <button className="btn btn-outline-success my-2 my-sm-0" >
     <i className="fas fa-shopping-cart"> My Cart</i>
     </button>
     </Link>
      </li>
      <li style={{marginLeft: '20px'}}>
     <Link  to = "/SignIn" >
     <button className="btn btn-outline-success my-2 my-sm-0" >
     <i class="fas fa-user-plus"> SignIn</i> 
     </button>
     </Link>
      </li>
    </ul>
    
  </div>
</nav>
</div>
        );    
    }
  }

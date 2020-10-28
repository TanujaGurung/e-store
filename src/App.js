import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Wishlist from './components/Wishlist';
import SignIn from './components/SignIn';

function App() {
  return (
    <React.Fragment>
    
    <Navbar />
    <switch>
    <Route exact path='/' component={Productlist}></Route>
    <Route path='/details' component={Details}></Route>
    <Route path='/cart' component={Cart}></Route>
    <Route path = '/wishlist' component ={Wishlist}></Route>
    <Route path = '/signin' component ={SignIn}></Route>
 
    </switch>
    
    </React.Fragment> 

  );
}

export default App;

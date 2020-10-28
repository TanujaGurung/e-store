import React, { Component } from 'react'
import { connect } from 'react-redux'
import  './Landingpage.css';
import imag from './e-store.jpg'

export default class Landingpage extends Component {
    render() {
        return (
            <div className="Landingpage" >
            <div id = "myimg">
            <div id ="cover">
            
        <h1>Welcome to e-store <br></br>
              India's No 1 shopping site</h1>
            </div> 
            </div>
            </div>    
        )
    }
}


import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
            <button onClick={(e) => document.getElementById("mySidenav").style.display="block"}><i class="fas fa-bars"></i></button>
            <div id="mySidenav" className="sidenav">
         
            
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
            </div>
        )
    }
}


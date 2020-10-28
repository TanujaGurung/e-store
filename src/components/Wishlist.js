import React, { Component } from 'react';
import Wishcard from './Wishcard';

export default class Wishlist extends Component {
    render() {
        return (
            <div>
            <h2 style={{textAlign:'center'}}>My Wishlist </h2>
            <Wishcard></Wishcard>
            <Wishcard></Wishcard>
            <Wishcard></Wishcard>
                
            </div>
        )
    }
}

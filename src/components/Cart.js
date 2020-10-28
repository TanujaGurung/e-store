import React, { Component } from 'react';
import Cartcard from './Cartcard';

export default class  extends Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Shopping Cart </h2>
                <Cartcard/>
                <Cartcard/>
                <Cartcard/>

            </div>
        )
    }
}

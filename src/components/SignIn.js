import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class SignIn extends Component {
    constructor(props){
        super(props)
            this.state={

            }
        }
onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
          }
    
    render() {
        return (
            <div>
            <h2>sign in</h2>
            <div class="g-signin2" data-onsuccess={this.onSignIn}></div>
            </div>
        );
    }
}

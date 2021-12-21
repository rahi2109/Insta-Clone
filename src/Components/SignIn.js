import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        return (
            <div>
                <input className="login_text" type="text" placeholder="Phone number, username, or email" />
                <input className="login_text" type="password" placeholder="Password" />
                <button className="login_button">Sign In</button>
            </div>
        )
    }
}

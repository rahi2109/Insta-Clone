import React, { Component } from 'react'
import { storage, auth } from '../Firebase/firebase'

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            userName: "",
            password: ""
        }
    }
    SignUP = ()=>{
        
        auth.createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    render() {
        return (
            <div>
                <input onChange={() => this.state.email = event.currentTarget.value} className="login_text" type="text" placeholder="Mobile Number or Email" />
                <input onChange={() => this.state.name = event.currentTarget.value} className="login_text" type="text" placeholder="Full Name" />
                <input onChange={() => this.state.userName = event.currentTarget.value} className="login_text" type="text" placeholder="Username" />
                <input onChange={() => this.state.password = event.currentTarget.value} className="login_text" type="password" placeholder="Password" />
                <button onClick={this.SignUP} className="login_button">Sign Up</button>
            </div>
        )
    }
}

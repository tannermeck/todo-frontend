import React, { Component } from 'react';
import './Auth.css';
import {createToken} from './fetch-utils.js';

class Auth extends Component {
    state = { email:'', password:''}
    getLogin = () => {
        return this.props.type === 'signin' ? "sign in" : "sign up"
    }
    handleChange = async (e) => {
        e.preventDefault();
        const user = await createToken(
            {email: this.state.email, password: this.state.password},
            this.props.type)
            this.props.setToken(user)
            this.props.history.push("/todos")
    }
    render() { 
        return ( 
            <>
                <h1>{this.getLogin().toUpperCase()}</h1>
                <form onSubmit={this.handleChange}>
                    <div className="email">
                        <h3>Email</h3>
                        <input type="email" 
                                onChange={(e) => this.setState({ email: e.target.value})}
                        required></input>
                    </div>
                    <div className="password">
                    <h3>Password</h3>
                    <input 
                         onChange={(e) => this.setState({ password: e.target.value})}
                    type="password" required></input>
                    </div>
                    <button id="submit-button" type="submit">{this.getLogin()}</button>
                </form>
            </>
         );
    }
}
 
export default Auth;
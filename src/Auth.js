import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {
    state = { email:'', password:'' }
    // getType()
    render() { 
        return ( 
            <>
                <form>
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
                    <button>{this.getType()}</button>
                </form>
            </>
         );
    }
}
 
export default Auth;
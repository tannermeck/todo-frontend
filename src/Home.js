import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home">
                <h1>Welcome to Your Todo List</h1>
                <ul>
                    <li>Check items off your list</li>
                    <li>Enter a new todo and click submit</li>
                    <li>Click sign-in or sign-up to view your todos</li>
                </ul>
            </div>
         );
    }
}
 
export default Home;
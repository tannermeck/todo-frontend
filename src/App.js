import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.js';
import Auth from './Auth.js';
import Home from './Home.js';
import ToDos from './Todos.js';

class App extends Component {
  state = { 
    token: localStorage.getItem('TOKEN'),
   }
   setToken = (e) => {
     this.setState({token: (e)})
   }
  render() { 
    return ( 
      <section className="body">
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/signin" 
                render={(routerProps) => (
                  <Auth type="signin"
                  setToken={this.setToken}
                  {...routerProps}/>
                )}></Route>
        <Route path="/signup" 
                render={(routerProps) => (
                  <Auth type="signup"
                  setToken={this.setToken}
                  {...routerProps}/>
                )}></Route>
        <Route path="/todos" 
                render={(routerProps) => 
                  this.state.token ? (
                  <ToDos {...routerProps}/>
                ) : (
                  <Redirect to="/signin"/>
                )}/>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
    </section>
     );
  }
}
 
export default App;

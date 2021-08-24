import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Auth from './Auth.js';
import Home from './Home.js';

function App() {
  return (
    <body className="body">
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/auth" component={Auth}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
    </body>
  )
}

export default App;

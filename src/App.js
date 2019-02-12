import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import Error from './components/Error';
import Homepage from './components/Homepage';
import Cube from './components/Cube';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="homepage">
          <Homepage/>
          <Switch>
            <Route path = "/" component={Home} exact />
            <Route path = "/Topics" component={Topics} />
            <Route path = "/About" component={About} />
            <Route component = {Error}/>
          </Switch>
          <Cube/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
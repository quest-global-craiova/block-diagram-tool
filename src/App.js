import React, { Component } from 'react';
import Login from './components/Login/Login'
import Layout from './components/Common/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter basename="/">
      <div>
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/diagram" exact component={Layout}/>
            <Route path="/ocv" exact component={Layout}/>
            <Route path="/ocvReports" exact component={Layout}/>
            <Route path="/" exact component={Login}/>
        </Switch> 
      </div>
      </BrowserRouter>      
    );
  }
}

export default App;
